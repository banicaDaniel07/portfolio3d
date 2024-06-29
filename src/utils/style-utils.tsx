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

export const scrollTop = () => {
    const mainCollection = document.getElementsByTagName('main');
    if (!_.isEmpty(mainCollection) && !_.isNil(mainCollection)) {
        const mainElement = mainCollection[0];
        if (!_.isNil(mainElement)) {
            mainElement.scrollTop = 0;
        }
    }
}