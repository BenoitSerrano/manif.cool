import { sha256 } from 'js-sha256';

export { hasher };

function hash(value: string) {
    return sha256(value);
}

function verify(value: string, hashed_value: string) {
    return hash(value) === hashed_value;
}

const hasher = {
    hash,
    verify,
};
