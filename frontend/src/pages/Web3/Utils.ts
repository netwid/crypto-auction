declare var window: any
declare var ethereum: any

function handleAccountsChanged(wallets: string[]) {
    alert(wallets);
}

export const requestAccess = async () => {
    if (typeof window.ethereum == "undefined") {
        alert('You need install metamask first');
    }

    ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((error: any) => {
            if (error.code === 4001) {
                console.log('Please connect to MetaMask.');
            } else {
                console.error(error);
            }
        });;
};