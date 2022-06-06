class Customer {
    constructor(
        id,
        fullName,
        email,
        phone,
        address,
        balance,
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
    }
} 

customers = [
    new Customer(455, "Fugiat ut voluptas", "130921930213-21", "sofeni@mailinator.com", "Aute at delectus qu", 0),
    new Customer(505, "Prescott Randall", "xikuqeso@mailinator.com", "+1 (355) 819-1339", "Est aperiam sunt por", 0),
    new Customer(545, "gdhftjrwreethj", "qeny@mailinator.com", "+1 (161) 131-4097", "Ratione et aliquip e", 1111),
    new Customer(565, "Superman", "superman@gm", "130921930213-21", "Washington DC", 0),
    new Customer(575, "Superman", "superman@gm.com", "130921930213-21",	"Washington DC", 0),
    new Customer(595, "Melissa Dale", "mixa@mailinator.com", "+1 (873) 372-2782", "Recusandae Et minim", 0),
    new Customer(605, "Elizabeth Tyler", "moqo@mailinator.com",	"+1 (754) 299-6156", "Dignissimos quaerat",	0)
];


function renderCustomer() {
    let htmls = customers.map(function (customer) {
        return `
            <tr>
                <th>${customer.id}</th>
                <td>${customer.fullName}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.address}</td>
                <td>${customer.balance}</td>
                <td>
                    <a class="btn btn-outline-secondary" href="/bank-customers/html/update.html">
                        <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                    </a>
                </td>
                <td>
                    <a class="btn btn-outline-success" href="/bank-customers/html/deposit.html">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </td>

                <td>
                    <a class="btn btn-outline-warning" href="/bank-customers/html/withdraw.html">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </a>
                </td>
                <td>
                    <a class="btn btn-outline-primary" href="/bank-customers/html/transfer.html">
                        <i class="fa fa-exchange" aria-hidden="true"></i>
                    </a></td>
                <td><a class="btn btn-outline-danger" href="/bank-customers/html/suspension.html">
                        <i class="fa fa-ban" aria-hidden="true"></i>
                    </a>
                </td>
            </tr>
        `
    })
    document.querySelector('#tb-customers').innerHTML = htmls.join("")
}


renderCustomer();