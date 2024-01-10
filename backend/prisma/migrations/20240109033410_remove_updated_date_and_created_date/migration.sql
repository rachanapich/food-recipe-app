/*
  Warnings:

  - You are about to drop the column `created_date` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `updated_date` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "created_date",
DROP COLUMN "updated_date";
