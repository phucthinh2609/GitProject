class Transfer {
    constructor(
        id,
        senderId,
        senderName,
        recipientId,
        recipientName,
        transferAmount,
        fees,
        feesAmount
    )
    {
        this.id = id;
        this.senderId = senderId;
        this.senderName = senderName;
        this.recipientId = recipientId;
        this.recipientName = recipientName;
        this.transferAmount = transferAmount;
        this.fees = fees;
        this.feesAmount = feesAmount;
    }
}

transfers = [
    new Transfer (1, 35, "Tatiana Kim", 5, "Cody Avila", "5,000,000", 10, "500,000"),
    new Transfer (2, 35, "Tatiana Kim", 5, "Cody Avila", "5,000,000", 10, "500,000"),
    new Transfer (3, 15, "Orlando Miranda", 25, "Marshall Page", "5,000", 10, "500"),
    new Transfer (4, 5, "Cody Avila", 15, "Orlando Miranda", "5,000,000", 10, "500,000"),
    new Transfer (5, 45, "Trần Ngọc Hữu", 35, "Tatiana Kim", "1,000", 10, "100"),
    new Transfer (6, 5, "Cody Avila", 15, "Orlando Miranda", "5,000", 10, "500"),
    new Transfer (7, 25, "Marshall Page", 35, "Tatiana Kim", "1,000", 10, "100"),
    new Transfer (8, 25, "Marshall Page", 85, "Rudyard Sargent", "1,000", 10, "100"),
    new Transfer (9, 175, "Cadman Dele", 185, "Camden Yates", "1,000", 10, "100"),
    new Transfer (10, 255, "ho", 315, "Giacomo Grant", 50, 10, 5),
    new Transfer (11, 255, "ho", 295, "Joan Goodman", 900, 10, 90),
];

function renderTransfer() {
    let htmls = transfers.map(function (transfer) {
        return `
            <tr>
                <td>${transfer.id}</td>
                <td>${transfer.senderId}</td>
                <td>${transfer.senderName}</td>
                <td>${transfer.recipientId}</td>
                <td>${transfer.recipientName}</td>
                <td>${transfer.transferAmount}</td>
                <td>${transfer.fees}</td>
                <td>${transfer.feesAmount}</td>
            </tr>
        `
    })
    document.querySelector('#tb-transfers').innerHTML = htmls.join("")
}

renderTransfer();