const keywords = [
  "lev casino зеркало",
  "лев казино",
  "лев казино бонус",
  "лев казино зеркало",
  "лев казино онлайн",
  "лев казино официальный",
  "лев казино официальный сайт",
  "лев казино регистрация",
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lev Casino — главная">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>LEV <b>CASINO</b></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О казино</a>
          <a href="#bonus">Бонус</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-link" href="#play">Войти <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Официальный сайт • 18+</p>
          <h1>Играйте<br /><em>по-крупному.</em></h1>
          <p className="hero-text">Lev Casino — онлайн-казино с быстрыми играми, щедрыми бонусами и честными правилами.</p>
          <div className="hero-actions" id="play">
            <a className="button button-primary" href="#register">Начать игру <span aria-hidden="true">→</span></a>
            <a className="button button-quiet" href="#about">Узнать больше</a>
          </div>
          <p className="under-note">Моментальная регистрация · Надёжная защита данных</p>
        </div>
        <div className="hero-art" aria-label="Лев Lev Casino">
          <div className="art-label">THE<br /><strong>LION</strong></div>
          <img src="/lev-casino-hero.png" alt="Силуэт льва на фоне казино" />
          <div className="art-stamp">LEV<br /><span>EST. 2024</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Преимущества">
        <span>ПРОВЕРЕННЫЕ ИГРЫ</span><i />
        <span>БЫСТРЫЕ ВЫПЛАТЫ</span><i />
        <span>ПОДДЕРЖКА 24/7</span><i />
        <span>БОНУС НОВЫМ ИГРОКАМ</span>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">01 / LEV CASINO</div>
        <div>
          <h2>Ваш азарт.<br /><span>Ваши правила.</span></h2>
          <p>Добро пожаловать на официальный сайт Lev Casino — место, где классический азарт встречается с современным онлайн-форматом. Выбирайте любимые игры, регистрируйтесь за несколько минут и начинайте с бонусом.</p>
        </div>
      </section>

      <section className="features section">
        <article><span className="feature-num">01</span><h3>Большой выбор</h3><p>Слоты, live-игры и классические столы в одном пространстве.</p></article>
        <article><span className="feature-num">02</span><h3>Честная игра</h3><p>Лицензированные провайдеры и прозрачные условия для каждого игрока.</p></article>
        <article><span className="feature-num">03</span><h3>Всегда рядом</h3><p>Оптимизированный сайт и поддержка, доступные с любого устройства.</p></article>
      </section>

      <section className="bonus section" id="bonus">
        <div><p className="eyebrow">Специально для вас</p><h2>Встречайте<br /><em>с бонусом</em></h2></div>
        <div className="bonus-copy"><p>Новый игрок получает приветственный бонус после регистрации. Активируйте предложение и откройте больше возможностей для игры.</p><a className="text-link" href="#register">Получить бонус <span>→</span></a></div>
      </section>

      <section className="register section" id="register">
        <div className="register-card"><p className="eyebrow">Готовы начать?</p><h2>Ваш следующий<br /><span>ход — здесь.</span></h2><a className="button button-primary" href="#footer">Зарегистрироваться <span aria-hidden="true">→</span></a><p className="responsible">Играйте ответственно. Только для пользователей 18+.</p></div>
      </section>

      <section className="seo section" id="faq">
        <div className="section-kicker">02 / ЧАСТЫЕ ВОПРОСЫ</div>
        <div className="faq-list">
          <details open><summary>Где найти рабочее зеркало Lev Casino?</summary><p>Актуальная ссылка на Lev Casino доступна на этой странице. Используйте только официальный сайт и проверяйте адрес перед входом.</p></details>
          <details><summary>Как проходит регистрация в Лев Казино?</summary><p>Нажмите кнопку регистрации, заполните короткую форму и подтвердите данные. Процесс занимает несколько минут.</p></details>
          <details><summary>Есть ли бонус новым игрокам?</summary><p>Да, для новых пользователей действует приветственное предложение. Условия бонуса указаны перед его активацией.</p></details>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="brand"><span className="brand-mark" aria-hidden="true">L</span><span>LEV <b>CASINO</b></span></div>
        <p>Официальный онлайн-сайт Lev Casino</p>
        <div className="footer-tags">{keywords.map((keyword) => <span key={keyword}>#{keyword.replaceAll(" ", "_")}</span>)}</div>
        <small>18+ · Играйте ответственно · © 2026 Lev Casino</small>
      </footer>
    </main>
  )
}

export const metadata = {
  title: "Lev Casino — официальный сайт, зеркало и бонус",
  description: "Lev Casino: официальный сайт, рабочее зеркало, регистрация, бонус новым игрокам и онлайн-игры.",
}

void keywords

export const dynamic = "force-static"
