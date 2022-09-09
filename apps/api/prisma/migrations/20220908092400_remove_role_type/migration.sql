/*
  Warnings:

  - You are about to drop the column `type` on the `Role` table. All the data in the column will be lost.
  - Added the required column `name` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "type",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "RoleType";
