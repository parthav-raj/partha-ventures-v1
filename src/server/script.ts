import { gs, type GlideRecord } from '@servicenow/glide'

export function showStateUpdate(current: GlideRecord, previous: GlideRecord) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.addInfoMessage(`state is updated from "${previousState}" to "${currentState}"`)
}
