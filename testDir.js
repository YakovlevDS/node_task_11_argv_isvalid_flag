console.log(__dirname);
console.log(__filename);

const { stdout } = process;
const flag = process.argv[2];

if (flag === '-d') {
    stdout.write(__dirname);
} else if (flag === '-f') {
    stdout.write(__filename);
} else {
    stdout.write('Пожалуйста, запустите программу с флагом -d или -f');
}