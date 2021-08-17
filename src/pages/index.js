import React from "react"



export default function Index() {
    return(
        <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Portal_Unemat_2020</title>
        <link
          rel="icon"
          type="image/png"
          sizes="337x359"
          href="assets/img/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="337x359"
          href="assets/img/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="337x359"
          href="assets/img/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="337x359"
          href="assets/img/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="337x359"
          href="assets/img/favicon.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="assets/css/styles.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* Start: Cabeçalho */}
        <section>
          {/* Start: Header No Scroll */}
          <header id="header-noscroll">
            {/* Start: Menu Acessibilidade */}
            <div className="acessilidade d-md-block d-none">
              <ul className="list-inline text-center text-sm-center text-md-center text-lg-right text-xl-right justify-content-end menu-access container">
                <li className="list-inline-item">
                  Ir para conteudo
                  <span className="badge badge-primary btn-atalho-teclado">1</span>
                </li>
                <li className="list-inline-item">
                  Ir para menu
                  <span className="badge badge-primary btn-atalho-teclado">2</span>
                </li>
                <li className="list-inline-item">
                  Ir para busca
                  <span className="badge badge-primary btn-atalho-teclado">3</span>
                </li>
                <li className="list-inline-item">
                  Ir para rodapé
                  <span className="badge badge-primary btn-atalho-teclado">4</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge badge-primary btn-atalho-teclado">A+</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge badge-primary btn-atalho-teclado">A-</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge badge-primary btn-atalho-teclado">
                    Contraste
                  </span>
                </li>
              </ul>
            </div>
            {/* End: Menu Acessibilidade */}
            {/* Start: Miolo Cabeçalho */}
            <div className="container d-none d-md-block">
              <div className="row">
                {/* Start: Brand */}
                <div className="col-md-4 d-flex d-xl-flex flex-grow-1 justify-content-xl-start align-items-xl-center">
                  <img src="assets/img/Logo_Unemat.svg" />
                </div>
                {/* End: Brand */}
                <div className="col-md-8 align-self-baseline">
                  {/* Start: Form Busca */}
                  <div className="d-xl-flex justify-content-xl-end align-items-xl-center busca-topo text-right">
                    <input
                      className="border rounded border-primary"
                      type="search"
                      id="input-top-1"
                      placeholder="O que você esta procurando?"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        backgroundColor: "#57a15f",
                        border: "none",
                        marginLeft: 10
                      }}
                    >
                      BUSCAR
                    </button>
                  </div>
                  {/* End: Form Busca */}
                  {/* Start: Menu Gov */}
                  <div>
                    <ul className="list-inline text-sm-center text-md-right text-lg-right text-xl-right menu-gov text-right">
                      <li className="list-inline-item">
                        <img src="assets/img/webmail.svg" />
                        <a href="#">webmail</a>
                        <span />
                      </li>
                      <li className="list-inline-item">
                        <img src="assets/img/lupa.svg" />
                        <a href="#">transparência</a>
                        <span />
                      </li>
                      <li className="list-inline-item">
                        <img src="assets/img/info.svg" />
                        <a href="#">acesso a informação</a>
                        <span />
                      </li>
                      <li className="list-inline-item">
                        <img src="assets/img/ouvidoria.svg" />
                        <a href="#">ouvidoria</a>
                        <span />
                      </li>
                      <li className="list-inline-item">
                        <img src="assets/img/contato.svg" />
                        <a href="#">contato</a>
                      </li>
                    </ul>
                  </div>
                  {/* End: Menu Gov */}
                </div>
              </div>
            </div>
            {/* End: Miolo Cabeçalho */}
            {/* Start: Menu Principal */}
            <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-dark">
              <div className="container-fluid container">
                <img
                  className="img-fluid logo-mobile desktop-hide"
                  src="assets/img/logo_unemat_horizontal.svg"
                />
                <button
                  data-toggle="collapse"
                  className="navbar-toggler"
                  data-target="#navcol-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon">
                    &nbsp; &nbsp; &nbsp;&nbsp;
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="nav navbar-nav d-flex flex-grow-1 justify-content-between dropdown">
                    <li
                      className="nav-item dropdown show"
                      role="presentation"
                      id="hover-menu"
                    >
                      <a
                        className="nav-link d-xl-flex align-items-xl-center active dropdown-toggle hover-menu"
                        id="dropdownMenu1"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img className="mb-auto" src="assets/img/home.svg" />
                        INSTITUCIONAL
                      </a>
                      {/* Start: DropDown */}
                      <ul
                        aria-labelledby="dropdownMenu1"
                        className="dropdown-rounded dropdown-menu shadow"
                      >
                        {/* Level two dropdown*/}
                        <li className="dropdown-submenu">
                          <a
                            id="dropdownMenu2"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="dropdown-item dropdown-toggle"
                          >
                            Sobre a Unemat
                          </a>
                          <ul
                            aria-labelledby="dropdownMenu2"
                            className="dropdown-menu dropdown-menu border-0 shadow dropdown-rounded"
                          >
                            <li>
                              <a href="historia.html" className="dropdown-item">
                                Nossa História
                              </a>
                            </li>
                            <li>
                              <a href="estrutura.html" className="dropdown-item">
                                Estrutura Organizacional
                              </a>
                            </li>
                            <li>
                              <a href="principios.html" className="dropdown-item">
                                Príncipios
                              </a>
                            </li>
                            <li>
                              <a href="anuario.html" className="dropdown-item">
                                Anuário Estatístico
                              </a>
                            </li>
                            <li>
                              <a href="numeros.html" className="dropdown-item">
                                Unemat em Números
                              </a>
                            </li>
                            <li>
                              <a href="avaliacao.html" className="dropdown-item">
                                Avaliação Institucional
                              </a>
                            </li>
                            <li>
                              <a href="ex-reitores.html" className="dropdown-item">
                                Galeria de Ex-reitores
                              </a>
                            </li>
                          </ul>
                        </li>
                        {/* End Level two */}
                        <li>
                          <a href="equipe.html" className="dropdown-item">
                            Nossa Equipe
                          </a>
                        </li>
                        <li>
                          <a href="legislacao.html" className="dropdown-item">
                            Legislação
                          </a>
                        </li>
                        {/* Level two dropdown*/}
                        <li className="dropdown-submenu">
                          <a
                            id="dropdownMenu2"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="dropdown-item dropdown-toggle"
                          >
                            Conselhos Superiores
                          </a>
                          <ul
                            aria-labelledby="dropdownMenu2"
                            className="dropdown-menu dropdown-menu border-0 shadow"
                          >
                            <li>
                              <a href="consuni.html" className="dropdown-item">
                                Consuni
                              </a>
                            </li>
                            <li>
                              <a href="conepe.html" className="dropdown-item">
                                Conepe
                              </a>
                            </li>
                            <li>
                              <a href="concur.html" className="dropdown-item">
                                Concur
                              </a>
                            </li>
                          </ul>
                        </li>
                        {/* End Level two */}
                        <li>
                          <a href="identidade-visual.html" className="dropdown-item">
                            Identidade Visual
                          </a>
                        </li>
                        <li>
                          <a
                            href="relacoes-internacionais.html"
                            className="dropdown-item"
                          >
                            Relações Internacionais
                          </a>
                        </li>
                        <li>
                          <a href="contato.html" className="dropdown-item">
                            Contato{" "}
                          </a>
                        </li>
                      </ul>
                      {/* End: DropDown */}
                    </li>
                    <li
                      className="nav-item dropdown show"
                      role="presentation"
                      id="hover-menu"
                    >
                      <a
                        className="nav-link d-xl-flex align-items-xl-center active dropdown-toggle hover-menu"
                        id="dropdownMenu1"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img className="mb-auto" src="assets/img/pro_reitorias.svg" />
                        PRÓ-REITORIAS
                      </a>
                      {/* Start: DropDown */}
                      <ul
                        aria-labelledby="dropdownMenu1"
                        className="dropdown-rounded dropdown-menu shadow"
                      >
                        <li>
                          <a href="prae.html" className="dropdown-item">
                            PRAE - Assuntos Estudantis
                          </a>
                        </li>
                        <li>
                          <a href="proec.html" className="dropdown-item">
                            PROEC - Extensão e Cultura
                          </a>
                        </li>
                        <li>
                          <a href="proeg.html" className="dropdown-item">
                            PROEG - Ensino de Graduação
                          </a>
                        </li>
                        <li>
                          <a href="prppg.html" className="dropdown-item">
                            PRPPG - Pesquisa e Pós-Graduação
                          </a>
                        </li>
                        <li>
                          <a href="prad.html" className="dropdown-item">
                            PRAD - Administração
                          </a>
                        </li>
                        <li>
                          <a href="pgf.html" className="dropdown-item">
                            PGF - Gestão Financeira
                          </a>
                        </li>
                        <li>
                          <a href="prpti.html" className="dropdown-item">
                            PRPTI - Planejamento e Tecnologia da Informação
                          </a>
                        </li>
                      </ul>
                      {/* End: DropDown */}
                    </li>
                    <li
                      className="nav-item dropdown show"
                      role="presentation"
                      id="hover-menu"
                    >
                      <a
                        className="nav-link d-xl-flex align-items-xl-center hover-menu"
                        id="dropdownMenu-1"
                        href="estude-na-unemat.html"
                      >
                        <img className="mb-auto" src="assets/img/estude.svg" />
                        ESTUDE NA UNEMAT
                      </a>
                    </li>
                    <li
                      className="nav-item dropdown show"
                      role="presentation"
                      id="hover-menu"
                    >
                      <a
                        className="nav-link d-xl-flex align-items-xl-center active dropdown-toggle hover-menu"
                        id="dropdownMenu-2"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          className="d-xl-flex mb-auto"
                          src="assets/img/campus2.svg"
                        />
                        CÂMPUS
                      </a>
                      {/* Start: DropDown */}
                      <ul
                        aria-labelledby="dropdownMenu1"
                        className="dropdown-rounded dropdown-menu shadow"
                      >
                        <li>
                          <a href="#" className="dropdown-item">
                            Alta Floresta-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Alto Araguaia-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Barra do Bugres-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Cáceres-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Colíder-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Diamantino-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Juara-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Médio Araguaia-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Nova Mutum-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Nova Xavantina-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Pontes e Lacerda-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Sinop-MT
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Tangara da Serra-MT
                          </a>
                        </li>
                      </ul>
                      {/* End: DropDown */}
                    </li>
                    <li
                      className="nav-item dropdown show"
                      role="presentation"
                      id="hover-menu"
                    >
                      <a
                        className="nav-link d-xl-flex align-items-xl-center active dropdown-toggle hover-menu"
                        id="dropdownMenu-3"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img className="mb-auto" src="assets/img/graduacao.svg" />
                        GRADUAÇÃO
                      </a>
                      {/* Start: DropDown */}
                      <ul
                        aria-labelledby="dropdownMenu1"
                        className="dropdown-rounded dropdown-menu shadow"
                      >
                        <li>
                          <a href="#" className="dropdown-item">
                            Oferta Contínua
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Parceladas
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            A Distância
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Indígena
                          </a>
                        </li>
                      </ul>
                      {/* End: DropDown */}
                    </li>
                    <li
                      className="nav-item dropdown show"
                      role="presentation"
                      id="hover-menu"
                    >
                      <a
                        className="nav-link d-xl-flex align-items-xl-center active dropdown-toggle hover-menu"
                        id="dropdownMenu-4"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img className="mb-auto" src="assets/img/posgra.svg" />
                        PÓS-GRADUAÇÃO
                      </a>
                      {/* Start: DropDown */}
                      <ul
                        aria-labelledby="dropdownMenu1"
                        className="dropdown-rounded dropdown-menu shadow"
                      >
                        <li>
                          <a href="#" className="dropdown-item">
                            Especialização
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Mestrado e Doutorado
                          </a>
                        </li>
                      </ul>
                      {/* End: DropDown */}
                    </li>
                    <li className="nav-item hover-menu" role="presentation" />
                  </ul>
                </div>
              </div>
            </nav>
            {/* End: Menu Principal */}
          </header>
          {/* End: Header No Scroll */}
          {/* Start: Header Menu Scroll */}
          <header id="header-scroll" className="shadow sticky-top">
            {/* Start: Social - Links Gov */}
            <div className="d-flex align-items-xl-center header-top container">
              {/* Start: Redes Sociais */}
              <div className="text-left social-midia col-md-5">
                <a href="#">
                  <img
                    src="assets/img/facebook.svg"
                    style={{ width: 20, height: 20 }}
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/img/instagram.svg"
                    style={{ width: 20, height: 20 }}
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/img/youtube.svg"
                    style={{ width: 20, height: 20 }}
                  />
                </a>
              </div>
              {/* End: Redes Sociais */}
              {/* Start: Links Governo */}
              <div className="text-right col-md-7 links-gov">
                <a className="menu-gov" href="#">
                  <img src="assets/img/webmail.svg" />
                  WEBMAIL
                  <span />
                </a>
                <a className="menu-gov" href="#">
                  <img src="assets/img/lupa.svg" />
                  TRANSPARÊNCIA
                  <span />
                </a>
                <a className="menu-gov" href="#">
                  <img src="assets/img/info.svg" />
                  ACESSO A INFORMAÇÃO
                  <span />
                </a>
                <a className="menu-gov" href="#">
                  <img src="assets/img/ouvidoria.svg" />
                  OUVIDORIA
                  <span />
                </a>
                <a className="menu-gov" href="#">
                  <img src="assets/img/contato.svg" />
                  CONTATO
                </a>
              </div>
              {/* End: Links Governo */}
            </div>
            {/* End: Social - Links Gov */}
            {/* Start: Menu Principal */}
            <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-dark">
              <div className="container-fluid container">
                <ul className="nav navbar-nav d-flex flex-grow-1 justify-content-start dropdown">
                  <li
                    className="nav-item dropdown show"
                    role="presentation"
                    id="hover-menu"
                  >
                    <a
                      className="nav-link d-xl-flex align-items-xl-center active dropdown-toggle hover-menu"
                      id="dropdownMenu1"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img className="mb-auto" src="assets/img/burger-menu.svg" />
                      MENU
                    </a>
                    {/* Start: DropDown */}
                    <ul
                      aria-labelledby="dropdownMenu1"
                      className="dropdown-rounded dropdown-menu shadow"
                    >
                      <li>
                        <a
                          className="dropdown-item nav-link d-xl-flex align-items-xl-center"
                          href="institucional.html"
                        >
                          <img className="mb-auto" src="assets/img/home-blue.svg" />
                          INSTITUCIONAL
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link d-xl-flex align-items-xl-center"
                          href="pro-reitorias.html"
                        >
                          <img
                            className="mb-auto"
                            src="assets/img//pro-reitorias-blue.svg"
                          />
                          PRÓ-REITORIAS
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link d-xl-flex align-items-xl-center"
                          href="estude-na-unemat.html"
                        >
                          <img className="mb-auto" src="assets/img/book-blue.svg" />
                          ESTUDE NA UNEMAT
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link d-xl-flex align-items-xl-center"
                          href="campus.html"
                        >
                          <img className="mb-auto" src="assets/img/campus-blue.svg" />
                          CÂMPUS
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link d-xl-flex align-items-xl-center"
                          href="graduacao.html"
                        >
                          <img
                            className="mb-auto"
                            src="assets/img/graduacao-blue.svg"
                          />
                          GRADUAÇÃO
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link d-xl-flex align-items-xl-center"
                          href="pos-graduacao.html"
                        >
                          <img
                            className="mb-auto"
                            src="assets/img/pos-graduacao-blue.svg"
                          />
                          PÓS-GRADUAÇÃO
                        </a>
                      </li>
                    </ul>
                    {/* End: DropDown */}
                  </li>
                  <li className="nav-item dropdown sho" role="presentation">
                    <a
                      className="nav-link d-xl-flex align-items-xl-center active"
                      id="dropdownMenu1"
                      href="index.html"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="assets/img/linha-pontilhada.svg" />
                      <img src="assets/img/logo-unemat-branco.svg" />
                    </a>
                  </li>
                </ul>
                <div className="text-right col-md-7 busca-topo-scroll">
                  <input
                    type="search"
                    className="form-rounded"
                    placeholder="O que você esta procurando?"
                  />
                </div>
              </div>
            </nav>
            {/* End: Menu Principal */}
          </header>
          {/* End: Header Menu Scroll */}
        </section>
        {/* End: Cabeçalho */}
        {/* Start: Slider Campanhas */}
        <section className="simple-slider">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active d-xl-flex">
                <img
                  className="w-100 d-block"
                  src="assets/img/01.png"
                  alt="Fez Enem? Faça Unemat"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 d-block"
                  src="assets/img/02.png"
                  alt="Slide Image"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 d-block"
                  src="assets/img/01.png"
                  alt="Slide Image"
                />
              </div>
            </div>
            <div>
              {/* Start: Previous */}
              <a
                className="carousel-control-prev"
                href="#carousel-1"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
                <span className="sr-only">Previous</span>
              </a>
              {/* End: Previous */}
              {/* Start: Next */}
              <a
                className="carousel-control-next"
                href="#carousel-1"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
                <span className="sr-only">Next</span>
              </a>
              {/* End: Next */}
            </div>
            <ol className="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to={0} className="active" />
              <li data-target="#carousel-1" data-slide-to={1} />
              <li data-target="#carousel-1" data-slide-to={2} />
            </ol>
          </div>
        </section>
        {/* End: Slider Campanhas */}
        {/* Start: Acesso Rapido Mobile */}
        <section className="menu-atalhos-mobile">
          <div className="container">
            <h4
              className="text-uppercase text-center"
              style={{ color: "#57a15f", paddingTop: 20 }}
            >
              <strong>Acesso Rápido</strong>
            </h4>
            <div className="row d-xl-flex" style={{ marginBottom: 20 }}>
              <div
                className="col-4 d-flex justify-content-center align-items-center"
                style={{ padding: 10 }}
              >
                <div className="btn-item">
                  <div className="menu-atalhos-block">
                    <a href="#">
                      <div>
                        <p className="text-center text-sm-center text-md-center text-lg-center text-xl-center">
                          <img src="assets/img/ico-portal_aluno.svg" />
                        </p>
                      </div>
                      <h1>portal do aluno</h1>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center align-items-center"
                style={{ padding: 10 }}
              >
                <div className="btn-item">
                  <div className="menu-atalhos-block">
                    <a href="#">
                      <div>
                        <p className="text-center text-sm-center text-md-center text-lg-center text-xl-center">
                          <img src="assets/img/ico-portal-servidor.svg" />
                        </p>
                      </div>
                      <h1>portal do servidor</h1>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center align-items-center"
                style={{ padding: 10 }}
              >
                <div className="btn-item">
                  <div className="menu-atalhos-block">
                    <a href="#">
                      <div>
                        <p className="text-center text-sm-center text-md-center text-lg-center text-xl-center">
                          <img src="assets/img/ico-portal-servidor.svg" />
                        </p>
                      </div>
                      <h1>portal do servidor</h1>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center align-items-center"
                style={{ padding: 10 }}
              >
                <div className="btn-item">
                  <div className="menu-atalhos-block">
                    <a href="#">
                      <div>
                        <p className="text-center text-sm-center text-md-center text-lg-center text-xl-center">
                          <img src="assets/img/ico-portal-servidor.svg" />
                        </p>
                      </div>
                      <h1>portal do servidor</h1>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center align-items-center"
                style={{ padding: 10 }}
              >
                <div className="btn-item">
                  <div className="menu-atalhos-block">
                    <a href="#">
                      <div>
                        <p className="text-center text-sm-center text-md-center text-lg-center text-xl-center">
                          <img src="assets/img/ico-portal-servidor.svg" />
                        </p>
                      </div>
                      <h1>portal do servidor</h1>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center align-items-center"
                style={{ padding: 10 }}
              >
                <div className="btn-item">
                  <div className="menu-atalhos-block">
                    <a href="#">
                      <div>
                        <p className="text-center text-sm-center text-md-center text-lg-center text-xl-center">
                          <img src="assets/img/ico-portal-servidor.svg" />
                        </p>
                      </div>
                      <h1>portal do servidor</h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Acesso Rapido Mobile */}
        {/* Start: Acesso Rapido Desktop */}
        <section className="d-xl-flex menu-atalhos">
          <div className="flex-grow-1 justify-content-between container" id="items">
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-portal_aluno.svg" />
                    </p>
                  </div>
                  <h1>portal do aluno</h1>
                </a>
              </div>
            </div>
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-portal-servidor.svg" />
                    </p>
                  </div>
                  <h1>portal do servidor</h1>
                </a>
              </div>
            </div>
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-biblioteca.svg" />
                    </p>
                  </div>
                  <h1>bibliotecas</h1>
                </a>
              </div>
            </div>
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-editais.svg" />
                    </p>
                  </div>
                  <h1>editais e seletivos</h1>
                </a>
              </div>
            </div>
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-sistemas.svg" />
                    </p>
                  </div>
                  <h1>sistemas</h1>
                </a>
              </div>
            </div>
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-dead.svg" />
                    </p>
                  </div>
                  <h1>educação a distância</h1>
                </a>
              </div>
            </div>
            <div className="btn-item">
              <div className="menu-atalhos-block">
                <a href="#">
                  <div>
                    <p>
                      <img src="assets/img/ico-imprensa.svg" />
                    </p>
                  </div>
                  <h1>imprensa</h1>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End: Acesso Rapido Desktop */}
        {/* Start: Noticias */}
        <section className="pd-bt">
          <div className="container">
            <div className="title-noticias" href="#">
              <h1 className="text-center text-sm-left text-md-left text-lg-left text-xl-left">
                Notícias
                <span className="veja-todas">
                  <a href="noticias.html">Ver todas</a>
                  <img src="assets/img/bluearrow.svg" />
                </span>
              </h1>
            </div>
            <div className="row">
              <div className="col-md-6 mg-bt20">
                <div className="d-flex align-items-end bg-noticia-overlay">
                  <div className="col-md-12 texto-noticia">
                    <p>Unemat faz pesquisa</p>
                    <h1>
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil estudo mundial sobre
                        prevenção de hanseníase
                      </strong>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mg-bt20">
                <div className="row not-ht">
                  <div className="col">
                    {/* Start: Noticia Destaque */}
                    <div className="d-flex align-items-end bg-noticia-overlay2 noticia-outras">
                      <div className="col-md-12 texto-noticia2">
                        <p>Unemat faz pesquisa</p>
                        <h6>
                          <strong>
                            Pesquisadora da Unemat coordena no Brasil estudo mundial
                            sobre prevenção de hanseníase
                          </strong>
                        </h6>
                      </div>
                    </div>
                    {/* End: Noticia Destaque */}
                  </div>
                </div>
                <div className="row not-ht">
                  <div className="col mt-auto">
                    {/* Start: Noticia Destaque */}
                    <div className="d-flex align-items-end bg-noticia-overlay2 noticia-outras">
                      <div className="col-md-12 texto-noticia2">
                        <p>Unemat faz pesquisa</p>
                        <h6>
                          <strong>
                            Pesquisadora da Unemat coordena no Brasil estudo mundial
                            sobre prevenção de hanseníase
                          </strong>
                        </h6>
                      </div>
                    </div>
                    {/* End: Noticia Destaque */}
                  </div>
                </div>
              </div>
              {/* Start: Mais Noticias */}
              <div className="col-md-3 text-center text-sm-left text-md-center text-lg-left text-xl-left">
                <div className="d-xl-flex align-items-baseline justify-content-xl-center align-items-xl-center mais-noticias">
                  <h1>Mais Notícias</h1>
                </div>
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
              </div>
              {/* End: Mais Noticias */}
            </div>
          </div>
        </section>
        {/* End: Noticias */}
        {/* Start: Lista Editais */}
        <section className="editais pd-bt bg-cinza">
          {/* Start: Titulo Editais | ver todos > */}
          <div className="container d-flex">
            <div className="d-xl-flex title-noticias">
              <h1>EDITAIS</h1>
            </div>
            <div className="veja-mais">
              <a className="d-flex" href="#">
                Ver todos
              </a>
              <img src="assets/img/bluearrow.svg" />
            </div>
          </div>
          {/* End: Titulo Editais | ver todos > */}
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-md-4 box-edital">
                <h1>EDITAL Nº 004/2019</h1>
                <h2>Tipo: SELEÇÃO DE DOCENTES</h2>
                <h2>Local: Campus Nova Xavantina</h2>
                <h2>Data: 22/06/2019</h2>
                <h2 />
                <div className="d-flex justify-content-between status-edital">
                  <h4 className="bg-success">
                    aberto
                    <br />
                  </h4>
                  <h5>
                    Última Publicação: 26 de julho de 2019 16:52
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-md-4 box-edital">
                <h1>EDITAL Nº 004/2019</h1>
                <h2>Tipo: SELEÇÃO DE DOCENTES</h2>
                <h2>Local: Campus Nova Xavantina</h2>
                <h2>Data: 22/06/2019</h2>
                <h2 />
                <div className="d-flex justify-content-between status-edital">
                  <h4 className="bg-info">
                    andamento
                    <br />
                  </h4>
                  <h5>
                    Última Publicação: 26 de julho de 2019 16:52
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-md-4 box-edital">
                <h1>EDITAL Nº 004/2019</h1>
                <h2>Tipo: SELEÇÃO DE DOCENTES</h2>
                <h2>Local: Campus Nova Xavantina</h2>
                <h2>Data: 22/06/2019</h2>
                <h2 />
                <div className="d-flex justify-content-between status-edital">
                  <h4 className="bg-danger">
                    encerrado
                    <br />
                  </h4>
                  <h5>
                    Última Publicação: 26 de julho de 2019 16:52
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-md-4 box-edital">
                <h1>EDITAL Nº 004/2019</h1>
                <h2>Tipo: SELEÇÃO DE DOCENTES</h2>
                <h2>Local: Campus Nova Xavantina</h2>
                <h2>Data: 22/06/2019</h2>
                <h2 />
                <div className="d-flex justify-content-between status-edital">
                  <h4 className="bg-success">
                    aberto
                    <br />
                  </h4>
                  <h5>
                    Última Publicação: 26 de julho de 2019 16:52
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-md-4 box-edital">
                <h1>EDITAL Nº 004/2019</h1>
                <h2>Tipo: SELEÇÃO DE DOCENTES</h2>
                <h2>Local: Campus Nova Xavantina</h2>
                <h2>Data: 22/06/2019</h2>
                <h2 />
                <div className="d-flex justify-content-between status-edital">
                  <h4 className="bg-info">
                    andamento
                    <br />
                  </h4>
                  <h5>
                    Última Publicação: 26 de julho de 2019 16:52
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-md-4 box-edital">
                <h1>EDITAL Nº 004/2019</h1>
                <h2>Tipo: SELEÇÃO DE DOCENTES</h2>
                <h2>Local: Campus Nova Xavantina</h2>
                <h2>Data: 22/06/2019</h2>
                <h2 />
                <div className="d-flex justify-content-between status-edital">
                  <h4 className="bg-danger">
                    encerrado
                    <br />
                  </h4>
                  <h5>
                    Última Publicação: 26 de julho de 2019 16:52
                    <br />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Lista Editais */}
        {/* Start: Unemat Numeros */}
        <section className="d-flex d-xl-flex bg-gradient pd-section">
          <div className="container">
            <div className="row justify-content-between count-unemat">
              <div className="col-md-2 text-center">
                <div>
                  <img src="assets/img/campus.svg" />
                  <h1
                    className="count-number timer title-count"
                    data-to={13}
                    data-speed={1500}
                  />
                  <p className="count-text">Câmpus</p>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div>
                  <img src="assets/img/pos-graduate.svg" />
                  <h1
                    className="count-number timer title-count"
                    data-to={53}
                    data-speed={1500}
                  />
                  <p className="count-text">Pós-Graduação</p>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div>
                  <img src="assets/img/graduate.svg" />
                  <h1
                    className="count-number timer title-count"
                    data-to={67}
                    data-speed={1500}
                  />
                  <p className="count-text">Graduação</p>
                  <p className="count-text2">Oferta Continua</p>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div>
                  <img src="assets/img/graduate.svg" />
                  <h1
                    className="count-number timer title-count"
                    data-to={50}
                    data-speed={1500}
                  />
                  <p className="count-text">Graduação</p>
                  <p className="count-text2">Modalidade Diferenciada</p>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div>
                  <img src="assets/img/academicos.svg" />
                  <h1
                    className="count-number timer title-count"
                    data-to={20829}
                    data-speed={1500}
                  />
                  <p className="count-text">Acadêmicos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Unemat Numeros */}
        {/* Start: Vida no Campus */}
        <section className="pd-bt">
          <div className="container">
            <div className="title-noticias" href="#">
              <h1 className="text-center text-sm-left text-md-left text-lg-left text-xl-left">
                VIDA NO CÂMPUS
              </h1>
            </div>
            {/* Start: Galeria - Vida no Campus */}
            <div className="row d-xl-flex galeria">
              <div className="col-md-6 gal-item">
                <div className="row" style={{ maxHeight: 600 }}>
                  <div className="col-md-12 gal-item">
                    <div className="box">
                      <img
                        className="img-ht img-fluid"
                        src="assets/img/01112019105427.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ maxHeight: 300 }}>
                  <div className="col-md-6 gal-item">
                    <div className="box">
                      <img
                        className="img-ht img-fluid shadow"
                        src="assets/img/01112019105427.jpg"
                        style={{ maxHeight: 300 }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 gal-item">
                    <div className="box">
                      <img
                        className="img-ht img-fluid shadow"
                        src="assets/img/01112019105427.jpg"
                        style={{ maxHeight: 300 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 gal-item">
                <div className="col-md-12 gal-item">
                  <div className="box" style={{ maxHeight: 381 }}>
                    <img
                      className="d-xl-flex img-ht img-fluid shadow"
                      src="assets/img/01112019105427.jpg"
                      style={{
                        padding: "10px !important",
                        paddingTop: "5px !important"
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 gal-item">
                  <div className="box" style={{ maxHeight: 350 }}>
                    <img
                      className="img-ht img-fluid shadow"
                      src="assets/img/01112019105427.jpg"
                      style={{
                        padding: "10px !important",
                        marginTop: "0px !important"
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Start: Mais Noticias */}
              <div className="col-md-3 text-center text-sm-left text-md-center text-lg-left text-xl-left">
                <div
                  className="d-xl-flex align-items-baseline justify-content-xl-center align-items-xl-center mais-noticias"
                  style={{ height: 60, paddingTop: 10 }}
                >
                  <h1 className="text-center">EVENTOS</h1>
                </div>
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                {/* Start: Lista Mais Noticias */}
                <div className="d-flex align-items-center lista-mais-noticias">
                  <div className="d-block data-noticia">
                    <h1>10</h1>
                    <h1>dez</h1>
                  </div>
                  <div className="d-block d-xl-flex align-items-xl-center detalhe-noticia">
                    <h1 className="text-left">
                      <strong>
                        Pesquisadora da Unemat coordena no Brasil esta...
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* End: Lista Mais Noticias */}
                <span className="justify-content-center ver-todos">
                  <a href="#">Ver todos Eventos</a>
                  <img src="assets/img/bluearrow.svg" />
                </span>
              </div>
              {/* End: Mais Noticias */}
            </div>
            {/* End: Galeria - Vida no Campus */}
          </div>
        </section>
        {/* End: Vida no Campus */}
        {/* Start: Videos */}
        <section className="pd-bt bg-cinza section-videos">
          {/* Start: Titulo Videos */}
          <div className="container d-flex">
            <div className="d-xl-flex title-noticias">
              <h1>Vídeos</h1>
            </div>
            <div className="veja-mais">
              <a className="d-flex" href="#">
                Ver todos
              </a>
              <img src="assets/img/bluearrow.svg" />
            </div>
          </div>
          {/* End: Titulo Videos */}
          <div className="container">
            {/* Start: Galeria - Vida no Campus */}
            <div className="row d-xl-flex row-img">
              <div className="col">
                <div className="list-video">
                  {/* Start: Responsive Youtube Embed */}
                  <div className="video-container">
                    <iframe
                      allowFullScreen
                      frameBorder={0}
                      src="https://www.youtube.com/embed/DFCvgKukfM0?loop=1&playlist=DFCvgKukfM0"
                      width={812}
                      height={480}
                    />
                  </div>
                  {/* End: Responsive Youtube Embed */}
                  <div className="p-3">
                    <h1 className="text-left">
                      Fez Enem? Faça Unemat! São 2.420 vagas...
                      <br />
                    </h1>
                    <h5 className="text-left">
                      A Unemat oferece 2.420 vagas para ingresso no primeiro semestre
                      de 2020 para quem realizou o Enem deste ano.
                      <br />
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="list-video">
                  {/* Start: Responsive Youtube Embed */}
                  <div className="video-container">
                    <iframe
                      allowFullScreen
                      frameBorder={0}
                      src="https://www.youtube.com/embed/8A7jQ6Cgfzg?loop=1&playlist=8A7jQ6Cgfzg"
                      width={812}
                      height={480}
                    />
                  </div>
                  {/* End: Responsive Youtube Embed */}
                  <div className="p-3">
                    <h1 className="text-left">
                      Unemat: Faculdade Indígena Intercultural (Forgrad)
                      <br />
                    </h1>
                    <h5 className="text-left">
                      A equipe da Assessoria de Comunicação da Unemat produziu um
                      documentário sobre a Faculdade&nbsp;
                      <br />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/* End: Galeria - Vida no Campus */}
          </div>
        </section>
        {/* End: Videos */}
        {/* Start: Editora */}
        <section className="pd-bt section-videos">
          <div className="container">
            {/* Start: Galeria - Vida no Campus */}
            <div className="row d-xl-flex row-img">
              <div className="col">
                <div>
                  {/* Start: Titulo Editora */}
                  <div className="col text-center d-flex">
                    <div className="d-xl-flex title-noticias">
                      <h1>Editora unemat</h1>
                    </div>
                    <div className="veja-mais">
                      <a className="d-flex" href="#">
                        Ver todos
                      </a>
                      <img src="assets/img/bluearrow.svg" />
                    </div>
                  </div>
                  {/* End: Titulo Editora */}
                </div>
                <div className="list-video">
                  {/* Start: Lista Mais Noticias */}
                  <div className="d-flex align-items-center listar-mais p-2">
                    <img
                      className="rounded"
                      src="assets/img/capa-editora-historia-das-ideias-linguisticas.png"
                      height="100px"
                    />
                    <div className="div-texto-desc p-2">
                      <h1 className="text-left">
                        <strong>História das Ideias Linguisticas</strong>
                        <br />
                      </h1>
                      <h5 className="text-left">
                        História das Ideias Linguisticas
                        <br />
                        Organizadores: Eni P. Orlandi
                        <br />
                        Ano de publicação: 2001
                        <br />
                        Número de páginas: 300p.
                        <br />
                      </h5>
                    </div>
                  </div>
                  {/* End: Lista Mais Noticias */}
                  {/* Start: Lista Mais Noticias */}
                  <div className="d-flex align-items-center listar-mais p-2">
                    <img
                      className="rounded"
                      src="assets/img/capa-editora-historia-das-ideias-linguisticas.png"
                      height="100px"
                    />
                    <div className="div-texto-desc p-2">
                      <h1 className="text-left">
                        <strong>História das Ideias Linguisticas</strong>
                        <br />
                      </h1>
                      <h5 className="text-left">
                        História das Ideias Linguisticas
                        <br />
                        Organizadores: Eni P. Orlandi
                        <br />
                        Ano de publicação: 2001
                        <br />
                        Número de páginas: 300p.
                        <br />
                      </h5>
                    </div>
                  </div>
                  {/* End: Lista Mais Noticias */}
                  {/* Start: Lista Mais Noticias */}
                  <div className="d-flex align-items-center listar-mais p-2">
                    <img
                      className="rounded"
                      src="assets/img/capa-editora-historia-das-ideias-linguisticas.png"
                      height="100px"
                    />
                    <div className="div-texto-desc p-2">
                      <h1 className="text-left">
                        <strong>História das Ideias Linguisticas</strong>
                        <br />
                      </h1>
                      <h5 className="text-left">
                        História das Ideias Linguisticas
                        <br />
                        Organizadores: Eni P. Orlandi
                        <br />
                        Ano de publicação: 2001
                        <br />
                        Número de páginas: 300p.
                        <br />
                      </h5>
                    </div>
                  </div>
                  {/* End: Lista Mais Noticias */}
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="col d-flex">
                    <div className="d-xl-flex title-noticias">
                      <h1>produções acadêmicas</h1>
                    </div>
                    <div className="veja-mais">
                      <a className="d-flex" href="#">
                        Ver todas
                      </a>
                      <img src="assets/img/bluearrow.svg" />
                    </div>
                  </div>
                </div>
                <div className="list-video">
                  {/* Start: Lista Mais Noticias */}
                  <div className="d-flex align-items-center listar-mais p-2">
                    <div className="div-texto-desc p-2">
                      <h1 className="text-left">
                        <strong>
                          A Educação na América Latina: As fronteiras da
                        </strong>
                        <br />
                        <strong>Educação Aberta nos dias atuais.</strong>
                        <br />
                      </h1>
                      <h5 className="text-left">
                        Revista da Educação Aberta do Brasil
                        <br />
                        Autor: João da Silva
                        <br />
                        Data da Publicação: 16/04/2019
                        <br />
                      </h5>
                    </div>
                  </div>
                  {/* End: Lista Mais Noticias */}
                  {/* Start: Lista Mais Noticias */}
                  <div className="d-flex align-items-center listar-mais p-2">
                    <div className="div-texto-desc p-2">
                      <h1 className="text-left">
                        <strong>
                          A Educação na América Latina: As fronteiras da
                        </strong>
                        <br />
                        <strong>Educação Aberta nos dias atuais.</strong>
                        <br />
                      </h1>
                      <h5 className="text-left">
                        Revista da Educação Aberta do Brasil
                        <br />
                        Autor: João da Silva
                        <br />
                        Data da Publicação: 16/04/2019
                        <br />
                      </h5>
                    </div>
                  </div>
                  {/* End: Lista Mais Noticias */}
                  {/* Start: Lista Mais Noticias */}
                  <div className="d-flex align-items-center listar-mais p-2">
                    <div className="div-texto-desc p-2">
                      <h1 className="text-left">
                        <strong>
                          A Educação na América Latina: As fronteiras da
                        </strong>
                        <br />
                        <strong>Educação Aberta nos dias atuais.</strong>
                        <br />
                      </h1>
                      <h5 className="text-left">
                        Revista da Educação Aberta do Brasil
                        <br />
                        Autor: João da Silva
                        <br />
                        Data da Publicação: 16/04/2019
                        <br />
                      </h5>
                    </div>
                  </div>
                  {/* End: Lista Mais Noticias */}
                </div>
              </div>
            </div>
            {/* End: Galeria - Vida no Campus */}
          </div>
        </section>
        {/* End: Editora */}
        {/* Start: Videos */}
        <section className="pd-bt bg-cinza section-videos">
          {/* Start: Titulo Videos */}
          <div className="container text-center d-xl-flex justify-content-xl-center">
            <div className="d-xl-flex title-noticias">
              <h1>Links Úteis</h1>
            </div>
          </div>
          {/* End: Titulo Videos */}
          <div className="container">
            {/* Start: Galeria - Vida no Campus */}
            <div className="row d-xl-flex row-img">
              <div className="col">
                <div className="text-center">
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                  <img className="p-2" src="assets/img/sagu2.gif" />
                </div>
              </div>
            </div>
            {/* End: Galeria - Vida no Campus */}
          </div>
        </section>
        {/* End: Videos */}
        {/* Start: Fale Conosco */}
        <section className="pd-bt section-videos">
          <div className="container">
            {/* Start: Galeria - Vida no Campus */}
            <div className="row d-xl-flex row-img">
              <div className="col col-md-6">
                <form method="post">
                  <div className="d-xl-flex title-noticias">
                    <h1>Fale conosco!</h1>
                  </div>
                  {/* Start: Success Example */}
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg bg-form"
                      type="text"
                      name="name"
                      placeholder="Nome:"
                    />
                  </div>
                  {/* End: Success Example */}
                  {/* Start: Success Example */}
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg bg-form"
                      type="text"
                      name="tel"
                      placeholder="Telefone:"
                    />
                  </div>
                  {/* End: Success Example */}
                  {/* Start: Success Example */}
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg bg-form"
                      type="text"
                      name="email"
                      placeholder="E-mail:"
                    />
                  </div>
                  {/* End: Success Example */}
                  {/* Start: Success Example */}
                  <div className="form-group">
                    <select className="form-control bg-form form-control-lg">
                      <optgroup
                        label="Selecione uma opção"
                        className="form-control-lg"
                      >
                        <option value={12}>Vestibular</option>
                        <option value={14}>Campus</option>
                        <option value={13}>Sugestões/Críticas/Elogios</option>
                      </optgroup>
                    </select>
                  </div>
                  {/* End: Success Example */}
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg bg-form"
                      name="message"
                      placeholder="Mensagem:"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group text-left btn-lg">
                    <button
                      className="btn btn-primary btn-enviar btn-lg"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
              <div className="col endereco pd-top col-md-6">
                <h5>
                  <strong>(65) 3221-0000</strong>
                  <br />
                  Av. Tancredo Neves, 1095 - Cavalhada II <br />
                  78217-900 - Cáceres - Mato Grosso
                  <br />
                  contato@unemat.br <br />
                  <br />
                  <strong>Ouvidoria Unemat</strong>
                  <br />
                  0800-322-1000
                  <br />
                  ouvidoria@unemat.br
                  <br />
                </h5>
                <h5 className="pd-top">
                  <strong>Acompanhe nossas Redes</strong>
                  <br />
                </h5>
                <img className="rede-icon" src="assets/img/logo-face.svg" />
                <img className="rede-icon" src="assets/img/logo-insta.svg" />
                <img className="rede-icon" src="assets/img/logo_ytb.svg" />
                <img className="rede-icon" src="assets/img/logo-wts.svg" />
              </div>
            </div>
            {/* End: Galeria - Vida no Campus */}
          </div>
        </section>
        {/* End: Fale Conosco */}
        {/* Start: Google Maps */}
        <section style={{ backgroundColor: "#EFEEEC" }}>
          <iframe
            src="https://www.google.com/maps/d/u/2/embed?mid=1BgUKs0CUcczAXS042Re72M1NIL3R-pzH"
            width="100%"
            height={480}
          />
        </section>
        {/* End: Google Maps */}
        {/* Start: Rodape */}
        <section>
          <div className="footer-dark">
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      className="img-responsive brasao_img"
                      src="assets/img/brasao_unemat_branco.svg"
                      width="80%"
                    />
                  </div>
                  <div className="col-md-2 text-center">
                    <h3 className="text-left">INSTITUCIONAL</h3>
                    <ul className="text-left">
                      <li>
                        <a href="#">Sobre a Unemat</a>
                      </li>
                      <li>
                        <a href="#">Nossa Equipe</a>
                      </li>
                      <li>
                        <a href="#">Legislação</a>
                      </li>
                      <li>
                        <a href="#">Conselhos Superiores</a>
                      </li>
                      <li>
                        <a href="#">Identidade Visual</a>
                      </li>
                      <li>
                        <a href="#">Relações Internacionais</a>
                      </li>
                      <li>
                        <a href="#">Contato</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-center">
                    <h3 className="text-left">PRÓ-REITORIAS</h3>
                    <ul className="text-left">
                      <li>
                        <a href="#">PRAE - Assuntos Estudantis</a>
                      </li>
                      <li>
                        <a href="#">PROEC - Extensão e Cultura</a>
                      </li>
                      <li>
                        <a href="#">PROEG - Ensino de Graduação</a>
                      </li>
                      <li>
                        <a href="#">PRPPG - Pesquisa e Pós-Graduação</a>
                      </li>
                      <li>
                        <a href="#">PRAD - Administração</a>
                      </li>
                      <li>
                        <a href="#">PGF - Gestão Financeira</a>
                      </li>
                      <li>
                        <a href="#">
                          PRPTI - Planejamento e Tecnologia da Informação
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 text-center">
                    <h3 className="text-left">CAMPUS</h3>
                    <ul className="text-left">
                      <li>
                        <a href="#">Alta Floresta-MT</a>
                      </li>
                      <li>
                        <a href="#">Alto Araguaia-MT</a>
                      </li>
                      <li>
                        <a href="#">Barra do Bugres-MT</a>
                      </li>
                      <li>
                        <a href="#">Cáceres-MT</a>
                      </li>
                      <li>
                        <a href="#">Colíder-MT</a>
                      </li>
                      <li>
                        <a href="#">Diamantino-MT</a>
                      </li>
                      <li>
                        <a href="#">Juara-MT</a>
                      </li>
                      <li>
                        <a href="#">Médio Araguaia-MT</a>
                      </li>
                      <li>
                        <a href="#">Nova Mutum-MT</a>
                      </li>
                      <li>
                        <a href="#">Nova Xavantina-MT</a>
                      </li>
                      <li>
                        <a href="#">Pontes e Lacerda-MT</a>
                      </li>
                      <li>
                        <a href="#">Sinop-MT</a>
                      </li>
                      <li>
                        <a href="#">Tangara da Serra-MT</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 text-center">
                    <h3 className="text-left">GRADUAÇÃO</h3>
                    <ul className="text-left">
                      <li>
                        <a href="#">Oferta Contínua</a>
                      </li>
                      <li>
                        <a href="#">Parceladas</a>
                      </li>
                      <li>
                        <a href="#">A Distância</a>
                      </li>
                      <li>
                        <a href="#">Indígena</a>
                      </li>
                      <li />
                    </ul>
                    <h3 className="text-left mt-4">PÓS-GRADUAÇÃO</h3>
                    <ul className="text-left">
                      <li>
                        <a href="#">Especialização</a>
                      </li>
                      <li>
                        <a href="#">Mestrado e Doutorado</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </>
      
    )
}
