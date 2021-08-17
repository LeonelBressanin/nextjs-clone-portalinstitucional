import React from "react"

export default function Noticias () {
    return (
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
  {/* Start: Cabecalho-Sticky-Menu-Paginas-Internas */}
  <section>
    {/* Start: Header Menu Scroll */}
    <header id="header-scroll-interno" className="shadow sticky-top">
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
                className="nav-link d-xl-flex align-items-xl-center dropdown-toggle hover-menu"
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
                    href="../pro-reitorias.html"
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
                className="nav-link d-xl-flex align-items-xl-center"
                id="dropdownMenu1"
                href="index.html"
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
    {/* Start: Breadcrumbs */}
    <div className="breadcrumb-interno">
      <ol className="breadcrumb container">
        <li className="breadcrumb-item">
          <a href="#">
            <img src="assets/img/home-cinza.svg" />
            <span>Página Inicial</span>
          </a>
        </li>
        <li className="breadcrumb-item active">
          <a href="#">
            <span>Notícias</span>
          </a>
        </li>
      </ol>
    </div>
    {/* End: Breadcrumbs */}
  </section>
  {/* End: Cabecalho-Sticky-Menu-Paginas-Internas */}
  {/* Start: Miolo Noticias */}
  <section className="pd-bt">
    <div className="container">
      <div>
        <h1 className="text-sm-left text-md-left text-lg-left text-xl-left titulo-padrao-interno">
          Notícias
        </h1>
      </div>
      <div />
      <h5 className="texto-padrao-interno mg-bt20">
        Confira abaixo as novidades relacionadas à UNEMAT e às suas instituições
        parceiras, produzidas pela Assessoria de Comunicação - Unemat e pelas
        unidades da Universidade.
      </h5>
      {/* Start: Notícias Destaque */}
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
        <div className="col-md-6 mg-bt20">
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
      </div>
      {/* End: Notícias Destaque */}
      {/* Start: Mais Noticias e Categorias */}
      <div className="row">
        <div className="col-md-8">
          {/* Start: Busca Interna Noticias */}
          <div className="d-xl-flex justify-content-xl-start align-items-xl-center busca-topo text-right mg-bt20">
            <input
              className="border rounded border-primary"
              type="search"
              style={{ width: "100% !important" }}
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
          {/* End: Busca Interna Noticias */}
          {/* Start: Lista Mais Notícias */}
          <div>
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            {/* Start: Bloco Lista Noticia */}
            <div className="bloco-lista-not">
              {/* Start: Div Chapeu */}
              <div>
                <h1 className="text-chapeu">Educação</h1>
              </div>
              {/* End: Div Chapeu */}
              {/* Start: Div Dados Noticia */}
              <div className="d-flex">
                {/* Start: Div Data */}
                <div className="data-noticia" style={{ width: 60 }}>
                  <h1>10</h1>
                  <h1>dez</h1>
                </div>
                {/* End: Div Data */}
                {/* Start: Div Titulo Noticia */}
                <div>
                  <h5>
                    Unemat Lança Novo Curso de Extensão para Atender a Região de
                    Nova Xavantina e cidades vizinhas do estado de mato
                    grosso...
                  </h5>
                </div>
                {/* End: Div Titulo Noticia */}
              </div>
              {/* End: Div Dados Noticia */}
              <hr />
            </div>
            {/* End: Bloco Lista Noticia */}
            <button className="btn btn-primary btn-block" type="button">
              Carregar mais notícias
            </button>
          </div>
          {/* End: Lista Mais Notícias */}
        </div>
        {/* Start: Mais Noticias */}
        <div className="col-md-4 text-center text-sm-left text-md-center text-lg-left text-xl-left">
          {/* Start: Div Calendario */}
          <div className="calendario">
            {/* Start: Div Config Calendario */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Arquivo</h4>
              </div>
              <div className="card-body">
                <div className="calendar calendar-first" id="calendar_first">
                  <div className="calendar_header">
                    <button className="switch-month switch-left">
                      {" "}
                      <i className="fa fa-chevron-left" />
                    </button>
                    <h2 />
                    <button className="switch-month switch-right">
                      {" "}
                      <i className="fa fa-chevron-right" />
                    </button>
                  </div>
                  <div className="calendar_weekdays" />
                  <div className="calendar_content" />
                </div>
              </div>
            </div>
            {/* End: Div Config Calendario */}
          </div>
          {/* End: Div Calendario */}
          <div className="card shadow-sm">
            <div className="card-header">
              <h4 className="font-weight-normal">Categorias</h4>
            </div>
            <div className="card-body">
              <a className="card-link" href="#">
                <h6 className="text-muted mb-2">Ensino</h6>
                <h6 className="text-muted mb-2">Cultura</h6>
                <h6 className="text-muted mb-2">Extensão</h6>
                <h6 className="text-muted mb-2">Pesquisa</h6>
                <h6 className="text-muted mb-2">Graduação</h6>
                <h6 className="text-muted mb-2">Pós-Graduação</h6>
                <h6 className="text-muted mb-2">Campus</h6>
                <h6 className="text-muted mb-2">Administração</h6>
                <h6 className="text-muted mb-2">Vestibular</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
                <h6 className="text-muted mb-2">Categorias</h6>
              </a>
            </div>
          </div>
        </div>
        {/* End: Mais Noticias */}
      </div>
      {/* End: Mais Noticias e Categorias */}
    </div>
  </section>
  {/* End: Miolo Noticias */}
  {/* Start: Rodape-Principal */}
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