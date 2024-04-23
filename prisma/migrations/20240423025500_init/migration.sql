-- CreateTable
CREATE TABLE `User` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `List` (
    `idList` INTEGER NOT NULL AUTO_INCREMENT,
    `listName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `idUser` INTEGER NOT NULL,

    UNIQUE INDEX `List_listName_key`(`listName`),
    PRIMARY KEY (`idList`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `idTask` INTEGER NOT NULL AUTO_INCREMENT,
    `taskName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `limit` BOOLEAN NOT NULL DEFAULT false,
    `limitDate` DATETIME(3) NULL,

    PRIMARY KEY (`idTask`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `List` ADD CONSTRAINT `List_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;
