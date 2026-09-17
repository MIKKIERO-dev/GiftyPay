const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const app = document.getElementById("app");

function navigation() {
    return `
        <nav>
            <button onclick="showHome()">🏠<span>Главная</span></button>
            <button onclick="showOrders()">📦<span>Заказы</span></button>
            <button onclick="showSupport()">🆘<span>Поддержка</span></button>
            <button onclick="showProfile()">👤<span>Профиль</span></button>
        </nav>
    `;
}

function showHome() {
    app.innerHTML = `
        <header>
            <div class="logo">Gifty<span>Pay</span></div>
            <div class="profile-btn" onclick="showProfile()">👤</div>
        </header>

        <main>
            <section class="hero">
                <h1>Добро пожаловать!</h1>
                <p>Покупайте игровую валюту быстро и удобно</p>
            </section>

            <h2>Игры</h2>

            <div class="games">

                <div class="game-card" onclick="showGame('PUBG Mobile')">
                    <div class="game-icon">🎯</div>
                    <b>PUBG Mobile</b>
                    <span>UC</span>
                </div>

                <div class="game-card" onclick="showGame('Standoff 2')">
                    <div class="game-icon">🔫</div>
                    <b>Standoff 2</b>
                    <span>Gold</span>
                </div>

                <div class="game-card" onclick="showGame('Brawl Stars')">
                    <div class="game-icon">⭐</div>
                    <b>Brawl Stars</b>
                    <span>Gems</span>
                </div>

                <div class="game-card" onclick="showGame('Mobile Legends')">
                    <div class="game-icon">⚔️</div>
                    <b>Mobile Legends</b>
                    <span>Diamonds</span>
                </div>

            </div>

            <h2>Telegram</h2>

            <div class="products">
                <button onclick="showStars()">⭐ Telegram Stars</button>
                <button onclick="showPremium()">💎 Telegram Premium</button>
                <button onclick="showGifts()">🎁 Telegram Gifts</button>
            </div>
        </main>

        ${navigation()}
    `;
}

function showGame(game) {
    app.innerHTML = `
        <header>
            <button onclick="showHome()">←</button>
            <div class="logo">${game}</div>
        </header>

        <main>
            <h2>Выберите количество</h2>

            <div class="products">
                <button onclick="buyGame('${game}', 100)">
                    100 — 100 ₽
                </button>

                <button onclick="buyGame('${game}', 300)">
                    300 — 300 ₽
                </button>

                <button onclick="buyGame('${game}', 500)">
                    500 — 500 ₽
                </button>

                <button onclick="buyGame('${game}', 1000)">
                    1000 — 1000 ₽
                </button>
            </div>
        </main>

        ${navigation()}
    `;
}

function buyGame(game, amount) {
    tg.showAlert(
        `Игра: ${game}\nКоличество: ${amount}\n\nОформление заказа подключим следующим шагом.`
    );
}

function showStars() {
    app.innerHTML = `
        <header>
            <button onclick="showHome()">←</button>
            <div class="logo">Telegram Stars</div>
        </header>

        <main>
            <h2>Выберите количество Stars</h2>

            <div class="products">

                <button onclick="buyStars(50)">
                    ⭐ 50 Stars — 72.50 ₽
                </button>

                <button onclick="buyStars(100)">
                    ⭐ 100 Stars — 145 ₽
                </button>

                <button onclick="buyStars(200)">
                    ⭐ 200 Stars — 290 ₽
                </button>

                <button onclick="buyStars(500)">
                    ⭐ 500 Stars — 725 ₽
                </button>

                <button onclick="buyStars(1000)">
                    ⭐ 1000 Stars — 1450 ₽
                </button>

                <button onclick="buyStars(5000)">
                    ⭐ 5000 Stars — 7250 ₽
                </button>

            </div>
        </main>

        ${navigation()}
    `;
}

function buyStars(amount) {
    tg.showAlert(
        `Вы выбрали ${amount} Telegram Stars.`
    );
}

function showPremium() {
    app.innerHTML = `
        <header>
            <button onclick="showHome()">←</button>
            <div class="logo">Telegram Premium</div>
        </header>

        <main>
            <h2>Telegram Premium</h2>

            <div class="products">

                <button onclick="buyPremium('1 месяц')">
                    💎 1 месяц
                </button>

                <button onclick="buyPremium('3 месяца')">
                    💎 3 месяца
                </button>

                <button onclick="buyPremium('6 месяцев')">
                    💎 6 месяцев
                </button>

                <button onclick="buyPremium('12 месяцев')">
                    💎 12 месяцев
                </button>

            </div>
        </main>

        ${navigation()}
    `;
}

function buyPremium(period) {
    tg.showAlert(
        `Вы выбрали Telegram Premium: ${period}`
    );
}

function showGifts() {
    app.innerHTML = `
        <header>
            <button onclick="showHome()">←</button>
            <div class="logo">Telegram Gifts</div>
        </header>

        <main>
            <div class="empty">
                <div>🎁</div>
                <h2>Подарки</h2>
                <p>Каталог подарков скоро появится.</p>
            </div>
        </main>

        ${navigation()}
    `;
}

function showOrders() {
    app.innerHTML = `
        <header>
            <div class="logo">Мои заказы</div>
        </header>

        <main>
            <div class="empty">
                <div>📦</div>
                <h2>Заказов пока нет</h2>
                <p>Здесь будут отображаться ваши покупки.</p>
            </div>
        </main>

        ${navigation()}
    `;
}

function showSupport() {
    app.innerHTML = `
        <header>
            <div class="logo">Поддержка</div>
        </header>

        <main>
            <div class="empty">
                <div>🆘</div>
                <h2>Поддержка</h2>
                <p>Раздел поддержки будет подключён позже.</p>
            </div>
        </main>

        ${navigation()}
    `;
}

function showProfile() {
    const user = tg.initDataUnsafe?.user;

    const name = user?.first_name || "Пользователь";

    const username = user?.username
        ? "@" + user.username
        : "Username не указан";

    app.innerHTML = `
        <header>
            <div class="logo">Профиль</div>
        </header>

        <main>
            <div class="profile">
                <div class="avatar">👤</div>
                <h2>${name}</h2>
                <p>${username}</p>
            </div>
        </main>

        ${navigation()}
    `;
}

showHome();
