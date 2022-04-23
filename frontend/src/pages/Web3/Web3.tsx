import { requestAccess } from './Utils';

export const Web3 = () => {
    return (
        <button onClick={requestAccess}>Запросить авторизацию</button>
    )
}