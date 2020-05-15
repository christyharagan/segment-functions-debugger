"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
async function launch(port) {
    let url;
    try {
        url = await get_proxy_url(port);
    }
    catch (e) { }
    if (url) {
        return [url, true];
    }
    child_process_1.exec('ngrok http ' + port, (error, stdout) => {
        if (error) {
            console.error(error);
        }
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [await get_proxy_url(port), false];
}
exports.launch = launch;
async function get_proxy_url(port) {
    let resp = await fetch('http://127.0.0.1:4040/api/tunnels');
    let j = await resp.json();
    let tunnels = j.tunnels;
    let tunnel = tunnels.find(tunnel => tunnel.config.addr == 'http://localhost:' + port);
    return tunnel ? tunnel.public_url : undefined;
}
exports.get_proxy_url = get_proxy_url;
//# sourceMappingURL=ngrok.js.map