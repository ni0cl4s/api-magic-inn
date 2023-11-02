/*
  Warnings:

  - You are about to drop the column `class` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `race` on the `UserProfile` table. All the data in the column will be lost.
  - Added the required column `characterClass` to the `UserProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterRace` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "class",
DROP COLUMN "race",
ADD COLUMN     "characterClass" TEXT NOT NULL,
ADD COLUMN     "characterRace" TEXT NOT NULL;
