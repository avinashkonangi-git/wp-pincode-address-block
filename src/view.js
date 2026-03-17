document.addEventListener("DOMContentLoaded", function () {

    const blocks = document.querySelectorAll(".indian-address-form");

    blocks.forEach(block => {

        const button = block.querySelector(".find-address");
        const loader = block.querySelector(".loader");
        const result = block.querySelector(".result");

        button.addEventListener("click", function () {

            const pincode = block.querySelector(".pincode").value;

            if (!pincode) {
                result.innerHTML = "Please enter pincode";
                return;
            }

            loader.style.display = "block";
            result.innerHTML = "";

            fetch(`https://api.postalpincode.in/pincode/${pincode}`)
                .then(res => res.json())
                .then(data => {

                    loader.style.display = "none";

                    if (data[0].Status !== "Success") {
                        result.innerHTML = "Invalid PIN Code";
                        return;
                    }

                    const office = data[0].PostOffice[0];

                    result.innerHTML = `
                        <div class="address-result">
                            <p><strong>District:</strong> ${office.District}</p>
                            <p><strong>State:</strong> ${office.State}</p>
                            <p><strong>Post Office:</strong> ${office.Name}</p>
                        </div>
                    `;
                });

        });

    });

});