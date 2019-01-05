CREATE TABLE [dbo].[Comments]
(
	[Id] INT IDENTITY(1,1) PRIMARY KEY, 
    [AddedBy] VARCHAR(50) NOT NULL, 
    [Source] VARCHAR(50) NOT NULL, 
    [Comments] VARCHAR(4096) NOT NULL, 
	[Approved] BIT NOT NULL DEFAULT 0,
    [CreatedDateTime] DATETIME NOT NULL DEFAULT GETDATE(), 
    [DeletedDateTime] DATETIME NULL, 
    [ModifiedDateTime] DATETIME NOT NULL DEFAULT GETDATE()
)
