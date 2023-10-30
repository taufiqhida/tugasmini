-- CreateTable
CREATE TABLE "categorys" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "categorys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "swafoto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_category_id_key" ON "accounts"("category_id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categorys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
