import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");
  // Hash password
  const hashedPassword = await bcrypt.hash("123456", 10);

  // --- Insert default users ---
  await prisma.users.createMany({
    data: [
      {
        email: "admin@gmail.com",
        password: hashedPassword,
        name: "Admin Super",
        role: "ADMIN",
        profileImage: null,
      },
      {
        email: "user@example.com",
        password: hashedPassword,
        name: "User Biasa",
        role: "USER",
        profileImage: null,
      }
    ],
    skipDuplicates: true,
  });

  // --- Insert sample projects ---
  await prisma.projects.createMany({
    data: [
      {
        title: "Website Company Profile",
        client: "PT Riang Abadi",
        description: "Pembuatan website company profile modern",
        status: "onprogress",
        startedAt: new Date("2024-10-01"),
      },
      {
        title: "Mobile App Internal",
        client: "Foundry Division",
        description: "Aplikasi internal untuk monitoring produksi",
        status: "draft",
      }
    ],
    skipDuplicates: true,
  });

  console.log("🌱 Seeding complete!");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Seed error:", err);
    process.exit(1);
  });
