


function postData() {
    //button variable
    const btn = document.getElementById("btn1");
    // input variable 
    const input = document.getElementById("input-form").value;
    //form variable
    const form = document.getElementById("form-data");

    const data = new FormData();
    
    try {
        const res = fetch('ajjawi_amer@hotmail.com.php', {
            method: 'POST',
             
            body: data,
        });

        if (!res.ok) console.log(`POST failed with ${res.status}`);
    } catch (err) {
        console.log(err);
    }
}