/*
  Warnings:

  - You are about to drop the `Description` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cableLength` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequency` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sensitivity` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Description" DROP CONSTRAINT "Description_productsId_fkey";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "cableLength" TEXT NOT NULL,
ADD COLUMN     "frequency" TEXT NOT NULL,
ADD COLUMN     "sensitivity" TEXT NOT NULL;

-- DropTable
DROP TABLE "Description";
