import { http } from './Config'

export default {
    get: () => {
        try {
            return http.get('todosAlunos');
        } catch (error) {
            console.log(error);

        }
    },
    set: (aluno) => {
        return http.post('aluno',aluno);
    }

}