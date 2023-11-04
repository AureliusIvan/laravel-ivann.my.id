// console log
// Path: resources/js/Utils/ConsoleLog.tsx

export default function console_log($params: any) {
    if (process.env.NODE_ENV === "production") {
        return null;
    }
    return console.log($params);
}