// Create an array to store IP addresses
let ipAddresses = [];

// Fetch IP addresses
document.querySelectorAll('li.hostnames.text-secondary').forEach(element => {
    const text = element.innerText;
    const ipPattern = /(\d{1,3}\.){3}\d{1,3}/; // Regular expression to match IP addresses
    const ip = text.match(ipPattern);
    if (ip) {
        console.log(ip[0]);
        ipAddresses.push(ip[0]);
    }
});

// Create a text blob
const blob = new Blob([ipAddresses.join('\n')], { type: 'text/plain' });

// Create a download link
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'ip_addresses.txt';

// Append the link, click it to start the download, then remove the link
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
