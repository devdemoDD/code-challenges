/**
 * if문 → map구조로 변경
 */

// sol1)
const paymentMaps = {
  KAKAO_PAYMENT: '카카오 결제 처리',
  NAVER_PAYMENT: '네이버 결제 처리',
  COUPANG_PAYMENT: '쿠팡 결제 처리',
  PAYCO_PAYMENT: '페이코 결제 처리',
  APPLE_PAYMENT: '애플 결제 처리',
};

function executePayment1(paymentType) {
  return paymentMaps[paymentType];
}

const result1 = executePayment1('NAVER_PAYMENT');
console.log(result1);

// sol2)
const paymentFnMaps = {
  payOnKakao() {
    sendLog('카카오 결제 처리중');
  },
  payOnNaver() {
    sendLog('네이버 결제 처리중');
  },
  payOnCoupang() {
    sendLog('쿠팡 결제 처리중');
  },
  payOnPayco() {
    sendLog('페이코 결제 처리중');
  },
  payOnApple() {
    sendLog('애플 결제 처리중');
  },
};

function payOnKakao() {}
function payOnNaver() {}
function payOnCoupang() {}
function payOnPayco() {}
function payOnApple() {}
function sendLog(message) {
  console.log(message);
}

function executePayment2(paymentType) {
  paymentFnMaps[paymentType]();
}

executePayment2('payOnCoupang');
