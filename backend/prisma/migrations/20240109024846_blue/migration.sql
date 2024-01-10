/*
  Warnings:

  - Added the required column `created_date` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_date` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL;
