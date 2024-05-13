import _ from 'lodash';

export const removeScrollFromMain = () => {
    const mainElement = document.querySelector('main');
    if (!_.isNil(mainElement)) {
        mainElement?.classList?.remove('overflow-y-scroll');
        mainElement?.classList?.add('overflow-y-hidden');
    }
}

export const addScrollToMain = () => {
    const mainElement = document.querySelector('main');
    if (!_.isNil(mainElement)) {
        mainElement?.classList?.remove('overflow-y-hidden');
        mainElement?.classList?.add('overflow-y-scroll');
    }
}