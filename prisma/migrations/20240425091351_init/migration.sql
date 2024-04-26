-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "interface" TEXT NOT NULL,
    "specialFeature" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Description" (
    "id" SERIAL NOT NULL,
    "frequency" TEXT NOT NULL,
    "Sensitivity" TEXT NOT NULL,
    "CableLength" TEXT NOT NULL,
    "productsId" INTEGER,

    CONSTRAINT "Description_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
