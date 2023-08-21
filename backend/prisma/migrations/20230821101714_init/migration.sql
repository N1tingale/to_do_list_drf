-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "edited" BOOLEAN NOT NULL,
    "editedAt" DATETIME NOT NULL,
    "isComplete" BOOLEAN NOT NULL
);
