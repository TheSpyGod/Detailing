export function readFile(fileName) {
    return fetch(`/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            console.log('File content:', text);
            const records = text.trim().split('\n');
            const result = [];

            records.forEach(record => {
                const elements = record.split(';');
                if (elements.length === 4) {
                    // Add checkmark to each line ending with a period in detailedDescription
                    elements[3] = elements[3].split('.').map(line => {
                        return line.trim().length > 0 ? line + ' ✔' + '\n': line;
                    }).join('<br/>');
                    result.push([...elements]);
                }
            });

            return result;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        return [];
    });
};

export default FileReader;