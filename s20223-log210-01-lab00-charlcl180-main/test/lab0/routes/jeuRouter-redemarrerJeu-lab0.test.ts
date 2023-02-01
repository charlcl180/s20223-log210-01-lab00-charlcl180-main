// Vous devez insérer les nouveaux tests ici
import 'jest-extended';
import supertest from 'supertest'
import app from '../../../src/app'

const request = supertest(app)
const testNom1 = 'Jean-Marc';
const testNom2 = 'Jean';


beforeAll(async () => {
  await request.post('/api/v1/jeu/redemarrerJeu').send({nom: testNom1})
  await request.post('/api/v1/jeu/redemarrerJeu').send({nom: testNom2})
});

describe('redemarrerJeu.test.ts', () => {

  it('devrait répondre 200 OK et renvoyer Du JSON', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu').send();
    expect(response.status).toBe(200)
    expect(response.type).toBe("application/json");
  });

  
  it("devrait contenir un test pour jouer qui retourne 404 (après redemarrerJeu()", async () => {
    await request.get('/api/v1/jeu/redemarrerJeu').send();
    const response = await request.get('/api/v1/jeu/jouer/' + testNom1);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body.error).toInclude("n'existe pas");
    expect(response.body.error).toInclude(testNom1);
  
  }) ;
  });
