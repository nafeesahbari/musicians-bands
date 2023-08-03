const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create(
            {
                name: 'ONE OK ROCK',
                genre: 'Rock',
            }
        );
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
        expect(band.name).toBe('Test Band');
        expect(band.genre).toBe('Rock');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create(
            {
                name: 'Taka',
                instrument: 'Guitar',
            }
        );
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
        expect(musician.name).toBe('Test Musician');
        expect(musician.instrument).toBe('Guitar');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band = await Band.create(
            {
                name: 'ONE OK ROCK',
                genre: 'Rock',
            }
        );
        await band.update({ name: 'Yuna' });
        const updatedBand = await Band.findByPk(band.id);
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
        expect(updatedBand.name).toBe('Yuna');
        expect(updatedBand.genre).toBe('R&B');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const musician = await Musician.create(
            {
                name: 'Taka',
                instrument: 'Guitar',
            }
        );
        await musician.update({ name: 'Miyavi' });
        const updatedMusician = await Musician.findByPk(musician.id);
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
        expect(updatedMusician.name).to.equal('Miyavi');
        expect(updatedMusician.instrument).to.equal('Electric Guitar');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const band = await Band.create(
            {
                name: 'ONEWE',
                genre: 'Pop Rock',
            }
        );
        await band.destroy();
        const deletedBand = await Band.findByPk(band.id);
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
        expect(deletedBand).to.be.null;
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const musician = await Musician.create(
            {
                name: 'Miyavi',
                instrument: 'Electric Guitar',
            }
        );
        await musician.destroy();
        const deletedMusician = await Musician.findByPk(musician.id);
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
        expect(deletedMusician).to.be.null;
    })
})