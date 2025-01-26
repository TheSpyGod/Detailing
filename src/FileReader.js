    export function processRecords(records) {
        const categorizedRecords = {};

        records.forEach(record => {
            const category = record.category;
            if (!categorizedRecords[category]) {
                categorizedRecords[category] = [];
            }
            const elements = [record.title, record.price, record.time, record.details];
            if (elements.length === 4) {
                elements[3] = elements[3]
                    .join('.')
                    .split('.')
                    .map(line => {
                        return line.trim().length > 0 ? line + ' ✔' : line;
                    })
                    .join('<br/>');
            }
            categorizedRecords[category].push(elements);
        });

        return categorizedRecords;
    }

    /*export function processRecords(records) {
        return records.map(record => {
            const elements = Array.isArray(record) ? [...record] : Object.values(record);
            if (elements.length === 4) {
                elements[3] = elements[3]
                    .join('.')
                    .split('.')
                    .map(line => {
                        return line.trim().length > 0 ? line + ' ✔' : line;
                    })
                    .join('<br/>');
            }
            return elements;
        });
    }

    export default FileReader;*/