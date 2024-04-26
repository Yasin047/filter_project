/*
  Warnings:

  - You are about to drop the column `CableLength` on the `Description` table. All the data in the column will be lost.
  - You are about to drop the column `Sensitivity` on the `Description` table. All the data in the column will be lost.
  - Added the required column `cableLength` to the `Description` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sensitivity` to the `Description` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Description" DROP COLUMN "CableLength",
DROP COLUMN "Sensitivity",
ADD COLUMN     "cableLength" TEXT NOT NULL,
ADD COLUMN     "sensitivity" TEXT NOT NULL;
