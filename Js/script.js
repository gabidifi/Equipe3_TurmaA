document.addEventListener('DOMContentLoaded', () => {
    inputText = document.getElementById('inputText');
    backspaceKey = document.getElementById('backspace');
    keys = document.querySelectorAll('.key');
    let keyHistory = [];

    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (key !== backspaceKey) {
                inputText.value += key.textContent;
                keyHistory.push(key.textContent);

                if (inputText.value === "DIREITA") {
                    window.location.href = "vencedor.html"; 
                }

                else if (inputText.value.length > 8) {
                    showMessage();
                    inputText.value = '';
                    keyHistory = [];
                }
            }
        });
    });

    backspaceKey.addEventListener('click', () => {
        if (keyHistory.length > 0) {
            keyHistory.pop();
            inputText.value = keyHistory.join('');
        }
    });

    function showMessage() {
        message = document.createElement('div');
        message.id = 'retryMessage'; 
        message.textContent = 'Tentar novamente!';
        message.classList.add("retryMessage")

        document.body.appendChild(message);

        message.addEventListener('click', () => {
            document.body.removeChild(message);
        });
    }
    });
    




