import { GetHandleTitle } from "./CF";

export const UserDefined = 1;
export const OrgDefined = 2;
export const HideIfFromOrg = 4;

export class Flag {
    flag = 0
    Set(flag){
        this.flag = this.flag | flag
    }
    Check(flag){
        return (this.flag & flag) !== 0
    }
}



function setDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}

export function StringToHandleSet(handles){
    return new Set(handles.split(";"))
}

export function HandleSetToString(handles) {
    return [...handles].join(';') + ";"
}

export function UniqueParsedHandles(hParsed, oldHandles){
    let ph = StringToHandleSet(hParsed)
    let oh = StringToHandleSet(oldHandles)
    let diff = setDifference( ph , oh)
    return {
        cnt: diff.size,
        unq: HandleSetToString(diff),
        tot: oh.size + diff.size - 1
    }
}

export function IsSameHandles(ha, hb) {
    return eqSet(StringToHandleSet(ha), StringToHandleSet(hb))
}

