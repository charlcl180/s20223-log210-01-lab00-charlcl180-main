// Vous devez insérer les nouveaux tests ici
import 'jest-extended';
import supertest from 'supertest'
import app from '../../../src/app'

const request = supertest(app)
const testNom1 = 'Jean-Marc';
const testNom2 = 'Jean-Marc';


beforeAll(async () => {
  await request.post('/api/v1/jeu/redemarrerJeu').send({nom: testNom1})
  await request.post('/api/v1/jeu/redemarrerJeu').send({nom: testNom1})
});

describe('redemarrerJeu.test.ts', () => {
  it("should implement test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});
