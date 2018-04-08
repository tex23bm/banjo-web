CREATE TABLE [dbo].[Guests]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(50) NOT NULL, 
    [Partner] VARCHAR(50) NULL, 
    [TotalGuestsAllowed] INT NOT NULL DEFAULT 1, 
    [ConfirmedGuests] INT NULL, 
    [ModifiedDate] DATETIME NOT NULL DEFAULT GETDATE()
)
