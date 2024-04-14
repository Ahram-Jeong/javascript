// import increase from './counter.js'; // 기본 내보내기 (export default) 인 경우
// import { increase, getCount } from "./counter.js"; // 개별, 여러 개 내보내기 (export) 인 경우
import * as counter from "./counter.js"; // 그룹화 내보내기

// increase();
// increase();
// increase();
counter.increase();
counter.increase();
counter.increase();

// const count = getCount();
console.log('현재 카운트 : ', counter.getCount());