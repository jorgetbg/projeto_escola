import { http } from './Config'

export default {
    get: () => {
        try {
            return http.get('todasDisciplinas');
        } catch (error) {
            console.log(error);

        }
    },
    set: (disciplina) => {
        return http.post('disciplina',disciplina);
    }

}