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
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '06269e2633894f4c9e5fdf41bb395bc4'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '16d50057df22414a90104445d43b2e86'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '411cc2ec9df943b1908c8934c95165ca'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                            value: 'decide'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43ac4433f8ec4bb78ec849e19f1efe0f'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55ffae04345b4c368e2b296d5865e1cd'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56a2662baed24634a801329c571943ca'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5af61be621f44532bb7019315684f6c5'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'deadline'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71b7bd09dad44256a4e967f0264b00f0'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '72638b6b74bd4fc4a35c76f955df9a30'
                        key: {
                            name: 'x_snc_partha_property_case'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9c99c24351aa46969be0de142c36b2fb'
                        key: {
                            name: 'x_snc_partha_property_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a9f1d4a07e514cb8a283ad1fc5f4f991'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                            value: 'delegate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb2c15708a7b42d5af7e45416db433b0'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd20c94c5cd06441ea9e9ef80564ba927'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'deadline'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8b87b3824e342a48a201f05ebd6a8fc'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                            value: 'delete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efb8db995f25414daadf97492c2bef1c'
                        key: {
                            name: 'x_snc_partha_property_case'
                            element: 'matrix'
                            value: 'do'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
