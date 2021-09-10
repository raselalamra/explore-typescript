interface player {
    name: string,
    age: number,
    salary: number,
    club: string,
    wife?: string
}

const mezba: player = {
    name: 'M Mezba',
    age: 33,
    salary: 15000,
    club: 'Bearchelona',
    wife: 'jomela sundori'
}
const Bappi: player = {
    name: 'M Bappi',
    age: 29,
    salary: 170000,
    club: 'RealMadrit'
}

interface Employ {
    name: string,
    age?: string,
    salary: number,
    degtination: string
}

interface Developer extends Employ {
    langues: string,
    codeEditor: string,
    typeingSped: number
}

const Zuku: Developer = {
    name: 'Jhankar Mahbub',
    salary: 230000,
    degtination: 'programming hero',
    langues: 'js',
    codeEditor: 'Vs code',
    typeingSped: 42
}