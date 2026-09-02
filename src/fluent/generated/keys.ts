import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ec35d2ff0c67482c85ab6c68520a9e35'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'b657d65153164dbb86d8859adb40910a'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '9d6cb99b0d7043a0afd9eb95c5e0da1d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3aef4151bd344469a6879d7c24d3c880'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '0120d93e46584598b97de7997dbb83b6'
                    }
                }
            }
        }
    }
}
