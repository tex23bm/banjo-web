﻿CREATE TABLE [dbo].[Guests]
(
	[Id] INT IDENTITY(1,1) PRIMARY KEY, 
    [Name] VARCHAR(50) NOT NULL, 
    [Partner] VARCHAR(50) NULL, 
	[LastName] VARCHAR(50) NOT NULL,
	[Address] VARCHAR(512) NULL,
	[Zipcode] VARCHAR(8) NULL,
    [TotalGuestsAllowed] INT NOT NULL DEFAULT 1, 
    [ConfirmedGuests] INT NULL, 
    [CreatedDateTime] DATETIME NOT NULL DEFAULT GETDATE(),
    [DeletedDateTime] DATETIME NULL,
    [ModifiedDateTime] DATETIME NOT NULL DEFAULT GETDATE()
)
