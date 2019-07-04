import {Connector, initConnect} from "ts-shelf";
import {format} from "url";

initConnect('toop-sigma.herokuapp.com');

class Api {
    public async execCode(code: string) {
        const url = format({
            pathname: '.json',
        });
        return await Connector.postApi(
            url,
            { code },
            {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            ''
        );
    }
}

export const API = new Api();
