export function processRecords(records) {

    return records.map(record => {
        const elements = [...record];
        if (elements.length === 4) {
            elements[3] = elements[3].join('.').split('.').map(line => {
                return line.trim().length > 0 ? line + ' ✔' : line;
            }).join('<br/>');
        }
        return elements;
    });
}


export default FileReader;