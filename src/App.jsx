import { useEffect, useMemo, useState } from "react";
import "./index.css";

const CONTACT = {
  phone: "02-2269-8625",
  address: "서울 중구 청계천로 186-1",
  hours: "24시간 연중무휴",
  blog: "https://blog.naver.com/libertypumps",
};

const products = [
  {
    id: "ascent",
    title: "변기일체형펌프",
    model: "Ascent 2",
    image: "/images/liberty-ascent.jpg",
    summary:
      "양변기, 집수탱크, 컷터펌프, 경보장치가 일체형으로 구성된 변기일체형 펌프입니다.",
    tags: ["변기일체형", "초간단 시공", "컷터펌프", "화장실 설치"],
    detailTitle: "변기일체형펌프 Ascent 2",
    detailDesc:
      "실내 변기 설치가 곤란했던 공간에 적용할 수 있는 리버티펌프 제품입니다. 양변기, 집수탱크, 컷터펌프, 경보장치가 일체형으로 구성되어 있으며 소변기, 세면대, 샤워기 등을 추가로 연결할 수 있습니다.",
    features: [
      "양변기, 집수탱크, 컷터펌프, 경보장치 일체형",
      "초간단 시공 설치 가능",
      "소변기, 세면대, 샤워기 등을 추가 설치 가능",
      "강력한 절삭력으로 이물질 막힘을 줄이는 구조",
      "실내 변기 설치가 곤란했던 곳에 적용 가능",
    ],
    useCases: ["지하 화장실", "사무실 화장실", "상가 화장실", "추가 화장실 설치"],
  },
  {
    id: "bathroom-floor",
    title: "화장실 바닥형펌프",
    model: "Lowpro52LPK",
    image: "/images/liberty-bathroom-floor.jpg",
    summary:
      "콘크리트 바닥을 깨지 않고 화장실이나 욕실의 시공과 설치가 가능한 바닥형 펌프입니다.",
    tags: ["바닥형", "화장실 배수", "욕실 배수", "소형 공간"],
    detailTitle: "화장실 바닥형펌프 Lowpro52LPK",
    detailDesc:
      "화장실이나 욕실에서 자연배수가 어려운 경우 사용할 수 있는 바닥형 펌프입니다. 콘크리트 바닥을 깨지 않고 설치할 수 있어 기존 공간에 추가 시공이 필요한 현장에 적합합니다.",
    features: [
      "콘크리트 바닥을 깨지 않고 설치 가능",
      "화장실이나 욕실 시공에 적용 가능",
      "소변기, 세면대, 샤워기 등을 추가로 설치 가능",
      "내식성 재질과 밀봉 구조로 위생적인 사용 가능",
      "자연배수가 안 되는 공간에 적용 가능",
    ],
    useCases: ["병원", "은행", "빌딩 사무실", "PC방", "노래방", "소형 화장실"],
  },
  {
    id: "sink",
    title: "싱크대용펌프",
    model: "405HVK",
    image: "/images/liberty-sink.jpg",
    summary:
      "싱크대, 탕비실, 카페, 사무실 등의 하수 처리에 적합한 소형 배수펌프입니다.",
    tags: ["싱크대용", "탕비실", "하수 처리", "소형 배수"],
    detailTitle: "싱크대용펌프 405HVK",
    detailDesc:
      "싱크대나 탕비실처럼 배수 배관 구성이 어려운 공간에 사용할 수 있는 소형 배수펌프입니다. 내부 청소와 점검이 가능하며, 냄새 차단 구조와 온수 사용 환경을 고려한 제품입니다.",
    features: [
      "편리한 점검구로 내부 청소 가능",
      "폴리에틸렌 탱크와 고무 패킹으로 냄새 차단",
      "온수 60℃까지 사용 가능",
      "은행, 카페, 사무실 탕비실 싱크대 하수 처리에 적합",
      "체크밸브 내장형 또는 외장형 선택 가능",
    ],
    useCases: ["싱크대", "탕비실", "카페", "사무실", "소형 주방"],
  },
  {
    id: "bathroom-round",
    title: "화장실 원통형펌프",
    model: "심플렉스 370 · 380 / 듀플렉스 1100",
    image: "/images/liberty-bathroom-round.jpg",
    summary:
      "지하 화장실, 상가, 빌딩, 공장 등 다양한 현장에 적용 가능한 오배수 펌프입니다.",
    tags: ["원통형", "오배수", "상가·빌딩", "대용량"],
    detailTitle: "화장실 원통형펌프",
    detailDesc:
      "자연배수가 어려운 지하 화장실, 상가, 빌딩, 공장, 단독주택 등에 적용할 수 있는 오배수 펌프입니다. 심플렉스 370, 380 및 듀플렉스 1100 등 현장 조건에 따라 선택할 수 있습니다.",
    features: [
      "다양한 탱크 용량으로 유입량에 따른 안정적인 운용 가능",
      "알람 기능으로 위험수위 경고 가능",
      "밀폐형 구조로 악취와 해충 걱정 감소",
      "간편한 점검구 구조",
      "빌딩, 상가, 공장, 단독주택 등 다양한 현장 적용",
    ],
    useCases: ["지하 화장실", "상가", "빌딩", "공장", "단독주택", "고급주택"],
  },
  {
    id: "grinder-small",
    title: "소형 그라인더펌프",
    model: "소형 그라인더 1펌프 / 2펌프",
    image: "/images/liberty-grinder-small.jpg",
    summary:
      "V슬라이스 구조의 그라인더날이 적용된 소형 그라인더 펌프 시스템입니다.",
    tags: ["그라인더", "1펌프", "2펌프", "절삭 구조"],
    detailTitle: "소형 그라인더펌프",
    detailDesc:
      "수중펌프의 고질적인 문제였던 형겊, 비닐, 위생용품 관련 문제를 줄이기 위해 그라인더 구조가 적용된 소형 시스템입니다. 현장 조건에 따라 1펌프형과 2펌프형을 선택할 수 있습니다.",
    features: [
      "V슬라이스 구조의 그라인더날 적용",
      "수중펌프의 막힘 문제 보완",
      "형겊, 비닐, 위생용품 관련 문제 해결에 도움",
      "소형화된 그라인더 펌프 시스템",
      "1펌프형, 2펌프형 선택 가능",
    ],
    useCases: ["소형 오배수 현장", "위생용품 유입 우려 현장", "상가", "빌딩"],
  },
  {
    id: "grinder-large",
    title: "대형 그라인더펌프",
    model: "LSG202 / LSGX202",
    image: "/images/liberty-grinder-large.jpg",
    summary:
      "강력한 모터와 V슬라이스 구조로 이물질 처리에 강한 대형 그라인더 펌프입니다.",
    tags: ["대형", "고양정", "강력 절삭", "그라인더"],
    detailTitle: "대형 그라인더펌프",
    detailDesc:
      "보다 강력한 모터와 V슬라이스 구조의 그라인더날이 적용된 대형 그라인더 펌프입니다. 고양정이 필요하거나 이물질 처리가 중요한 현장에서 사용할 수 있습니다.",
    features: [
      "강력한 모터와 그라인더날 적용",
      "V슬라이스 구조의 절삭 방식",
      "잠금밸브, 체크밸브, 유니온 자동탈착장치 내장 가능",
      "견고한 유리섬유 재질의 통",
      "1펌프형, 2펌프형 선택 가능",
    ],
    useCases: ["대형 오배수 현장", "빌딩", "공장", "고양정 필요 현장"],
  },
];

const keywords = [
  "리버티펌프",
  "Liberty Pumps",
  "Liberty Pump",
  "오배수펌프",
  "배수펌프",
  "싱크대 배수펌프",
  "변기일체형펌프",
  "화장실 배수펌프",
  "지하 화장실 펌프",
  "그라인더펌프",
];

function Icon({ type }) {
  const common = {
    className: "icon-svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    map: (
      <svg {...common}>
        <path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    ),
    drop: (
      <svg {...common}>
        <path d="M12 2s6 6.3 6 11a6 6 0 0 1-12 0c0-4.7 6-11 6-11z" />
      </svg>
    ),
    back: (
      <svg {...common}>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
    ),
  };

  return <span className="icon">{icons[type] || icons.check}</span>;
}

function ProductCard({ product, onOpen }) {
  return (
    <button className="product-card" onClick={() => onOpen(product.id)}>
      <div className="product-image-wrap">
        <img src={product.image} alt={`${product.title} ${product.model}`} />
      </div>
      <div className="product-content">
        <p className="product-model">{product.model}</p>
        <h3>{product.title}</h3>
        <p>{product.summary}</p>
        <div className="tag-row">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="detail-link">
          자세히 보기 <Icon type="arrow" />
        </div>
      </div>
    </button>
  );
}

function ProductDetail({ product, onBack }) {
  return (
    <main className="site">
      <Header />

      <section className="detail-page">
        <div className="container">
          <button className="back-button" onClick={onBack}>
            <Icon type="back" />
            제품 목록으로 돌아가기
          </button>

          <div className="detail-grid">
            <div className="detail-image">
              <img src={product.image} alt={product.detailTitle} />
            </div>

            <div className="detail-content">
              <p className="section-kicker">LIBERTY PUMPS</p>
              <h1>{product.detailTitle}</h1>
              <p className="detail-model">{product.model}</p>
              <p className="detail-desc">{product.detailDesc}</p>

              <div className="detail-tags">
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a className="btn btn-primary detail-call" href={`tel:${CONTACT.phone}`}>
                <Icon type="phone" />
                전화 상담하기 {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="detail-info-grid">
            <section className="detail-box">
              <h2>제품 특징</h2>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>
                    <Icon type="check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-box">
              <h2>적용 가능한 현장</h2>
              <ul>
                {product.useCases.map((useCase) => (
                  <li key={useCase}>
                    <Icon type="drop" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          <div className="brand-mark">L</div>
          <div>
            <strong>리버티펌프</strong>
            <span>Liberty Pumps 상담 페이지</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#about">소개</a>
          <a href="#products">제품</a>
          <a href="#use">적용 현장</a>
          <a href="#contact">문의</a>
        </nav>

        <a className="header-call" href={`tel:${CONTACT.phone}`}>
          <Icon type="phone" />
          전화문의
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>리버티펌프 상담</h2>
          <p>
            오배수펌프, 배수펌프, 싱크대 배수펌프, 변기일체형펌프,
            그라인더펌프 상담을 도와드립니다.
          </p>
          <p className="future-info">
            사업자등록번호 및 대표자명 등 추가 정보는 추후 입력 가능합니다.
          </p>
        </div>

        <div className="footer-info">
          <p>주소: {CONTACT.address}</p>
          <p>전화: {CONTACT.phone}</p>
          <p>영업시간: {CONTACT.hours}</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId),
    [selectedProductId]
  );

  useEffect(() => {
    if (selectedProductId) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [selectedProductId]);

  const handleOpenProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleBackToProducts = () => {
    setSelectedProductId(null);

    setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <main className="site">
      <Header />

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <Icon type="check" />
              리버티펌프 · 오배수·배수펌프 상담
            </div>

            <h1>
              <span>리버티펌프</span>
              <span>전문 상담</span>
              <em>오배수·배수펌프 문의</em>
            </h1>

            <p className="hero-desc">
              자연 배수가 어려운 지하 화장실, 싱크대, 욕실, 상가, 빌딩,
              공장 등의 오배수 처리에 필요한 리버티펌프 제품을 상담해드립니다.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={`tel:${CONTACT.phone}`}>
                <Icon type="phone" />
                {CONTACT.phone}
              </a>
              <a className="btn btn-secondary" href="#products">
                제품 보기
              </a>
            </div>

            <div className="trust-grid">
              <div><Icon type="check" /> 리버티펌프 상담</div>
              <div><Icon type="check" /> 오배수·배수펌프</div>
              <div><Icon type="check" /> 싱크대·화장실 배수</div>
              <div><Icon type="check" /> 24시간 연중무휴</div>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/images/liberty-main.jpg" alt="리버티펌프 설치 예시" />
          </div>
        </div>
      </section>

      <section id="about" className="section intro-section">
        <div className="container intro-grid">
          <div>
            <p className="section-kicker">LIBERTY PUMPS</p>
            <h2>리버티펌프는 어떤 경우에 필요할까요?</h2>
          </div>
          <div className="intro-box">
            <p>
              리버티펌프는 자연 배수가 어려운 공간에서 오수와 배수를 처리하기
              위해 사용하는 펌프 시스템입니다. 지하 화장실, 욕실, 싱크대,
              상가, 빌딩, 공장, 단독주택 등 다양한 현장에 적용할 수 있습니다.
            </p>
            <p>
              제품명이나 설치 환경을 알려주시면 변기일체형, 싱크대용,
              화장실 바닥형, 원통형, 그라인더펌프 등 용도에 맞는 제품 상담이
              가능합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">PRODUCTS</p>
            <h2>주요 리버티펌프 제품</h2>
            <p>
              제품 카드를 클릭하면 상세 이미지와 제품별 설명을 확인할 수 있습니다.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={handleOpenProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="use" className="section use-section">
        <div className="container use-grid">
          <div className="use-card dark">
            <p className="section-kicker">WHERE TO USE</p>
            <h2>적용 가능한 현장</h2>
            <p>
              자연배수가 안 되는 공간, 배관 공사가 어려운 공간, 추가 화장실이나
              싱크대 설치가 필요한 공간에 적용할 수 있습니다.
            </p>
          </div>

          <div className="use-list">
            <div><Icon type="drop" /> 지하 화장실</div>
            <div><Icon type="drop" /> 욕실·샤워실</div>
            <div><Icon type="drop" /> 싱크대·탕비실</div>
            <div><Icon type="drop" /> 상가·빌딩</div>
            <div><Icon type="drop" /> 병원·사무실</div>
            <div><Icon type="drop" /> 공장·단독주택</div>
          </div>
        </div>
      </section>

      <section className="section keyword-section">
        <div className="container">
          <div className="keyword-box">
            <h2>상담 가능 품목</h2>
            <div className="keyword-list">
              {keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="section-kicker">CONTACT</p>
            <h2>리버티펌프 문의</h2>
            <p>
              제품 모델명, 설치 위치, 사용 목적을 알려주시면 상담이 더
              정확해집니다. 전화로 편하게 문의해 주세요.
            </p>

            <div className="info-list">
              <div className="info-item">
                <Icon type="phone" />
                <div>
                  <span>전화</span>
                  <strong>{CONTACT.phone}</strong>
                </div>
              </div>

              <div className="info-item">
                <Icon type="map" />
                <div>
                  <span>주소</span>
                  <strong>{CONTACT.address}</strong>
                </div>
              </div>

              <div className="info-item">
                <Icon type="clock" />
                <div>
                  <span>상담시간</span>
                  <strong>{CONTACT.hours}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <h3>제품 상담이 필요하신가요?</h3>
            <p>
              리버티펌프, 오배수펌프, 배수펌프, 변기일체형펌프,
              싱크대 배수펌프 관련 상담 가능합니다.
            </p>

            <div className="panel-actions">
              <a className="btn btn-primary" href={`tel:${CONTACT.phone}`}>
                <Icon type="phone" />
                전화 상담하기
              </a>
              <a
                className="btn btn-secondary"
                href={CONTACT.blog}
                target="_blank"
                rel="noreferrer"
              >
                블로그 보기 <Icon type="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;