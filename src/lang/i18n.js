import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
import langEn from './lang.en';
import langKo from './lang.ko';
 
const resource =  {
    'en': {
        translation: langEn
    },
    'ko': {
        translation: langKo
    }
};
 
i18n
    .use(initReactI18next)
    .init({
        resources: resource,
        // 초기 설정 언어
        lng: 'en-US',
        fallbackLng: {
            'en-US':['en'],
            default:['ko']
        },
        debug: false,
        defaultNS: 'translation',
        ns: 'translation',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    })
 
export default i18n;