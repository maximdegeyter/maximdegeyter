<script>
  const name = 'Maxim De Geyter';
</script>

<header>
  <div class="header__container">
    <strong class="logo"><a href="/">Maxim De Geyter</a></strong>
    <nav>
      <a href="/about">About</a>
      <a href="/works">Works</a>
      <a href="/contact">Contact</a>
    </nav>
    <div />
  </div>
</header>
<main>
  <slot />
</main>
<footer>
  <p>© 2023 Maxim De Geyter. All Rights Reserved.</p>
</footer>

<style lang="scss">
  header {
    height: 6rem;
    border-bottom: 1px solid #e5e5e5;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(1rem);
  }

  .header__container {
    width: 75rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 33%;
    }

    nav {
      width: 33%;
      a {
        font-family: 'Helvetica Neue';
        font-size: 1.125rem;
        border: none;
        padding: 1rem 1.5rem;
        border-radius: 0.25rem;
        color: #404040;

        &:hover {
          background-color: #f7f7f7;
          color: black;
        }
      }
    }
  }

  .logo {
    width: 33%;
    a {
      font-size: 1.5rem;
      color: black;
      border: none;
    }
  }

  footer {
    height: 3rem;
  }
</style>
