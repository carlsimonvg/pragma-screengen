export const staffTemplate =
    {
        "type": "view",
        "fields": [{
                "field": "staffCode",
                "map": "code"
            },
            {
                "field": "staffDescription",
                "map": "description"
            },
            {
                "field": "siteCode",
                "map": "siteCode"
            },
            {
                "field": "initials",
                "map": "initials"
            },
            {
                "field": "firstName",
                "map": "firstName"
            },
            {
                "field": "lastName",
                "map": "lastName"
            },
            {
                "field": "jobTitle",
                "map": "jobTitle"
            },
            {
                "field": "postNumber",
                "map": "postNumber"
            },
            {
                "field": "id",
                "map": "id"
            },
            {
                "field": "phoneNumber",
                "map": "phoneNumber"
            },
            {
                "field": "mobile",
                "map": "mobile"
            },
            {
                "field": "email",
                "map": "email"
            },
            {
                "field": "address1",
                "map": "address1"
            },
            {
                "field": "address2",
                "map": "address2"
            },
            {
                "field": "address3",
                "map": "address3"
            },
            {
                "field": "tradeCode",
                "map": "tradeCode"
            },
            {
                "field": "costElementCode",
                "map": "costElementCode"
            },
            {
                "field": "calendarCode",
                "map": "calendarCode"
            },
            {
                "field": "currencyCode",
                "map": "currencyCode"
            },
            {
                "field": "sectionCode",
                "map": "sectionCode"
            },
            {
                "field": "normalTime",
                "map": "normalTime"
            },
            {
                "field": "overtime1",
                "map": "overtime1"
            },
            {
                "field": "overtime2",
                "map": "overtime2"
            },
            {
                "field": "overtime3",
                "map": "overtime3"
            },
            {
                "field": "isEmailWorkOrderApproval",
                "map": "isEmailWorkOrderApproval"
            },
            {
                "field": "isSmsWorkOrderApproval",
                "map": "isSmsWorkOrderApproval"
            },
            {
                "field": "isSmsForCriticalAssetsOnly",
                "map": "isSmsForCriticalAssetsOnly"
            }
        ],
        "body": {
            "elements": [
                {
                    "element": "h1",
                    "content": "Header",
                    "styles": ["group-header"]
                },
                {
                    "element": "group",
                    "id": "headerGroup",
                    "title": "Header Information",
                    "elements": [{
                        element: "input",
                        "title": "Code",
                        "field": "staffCode",
                        "attributes": {
                            "required": "true"
                        }
                    },
                        {
                            element: "input",
                            "title": "Description",
                            "field": "staffDescription",
                            "attributes": {
                                "readonly": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Site",
                            "field": "siteCode",
                            "description": "siteDescription"
                        }]
                },
                {
                    "element": "h1",
                    "content": "Personal Info",
                    "styles": ["group-header"]
                },
                {
                    "element": "group",
                    "id": "personalDetailsGroup",
                    "title": "Personal Details",
                    "elements": [
                        {
                            element: "input",
                            "title": "Initials",
                            "field": "initials"
                        },
                        {
                            element: "input",
                            "title": "First name",
                            "field": "firstName",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Last name",
                            "field": "lastName",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Job title",
                            "field": "jobTitle"
                        },
                        {
                            element: "input",
                            "title": "Post number",
                            "field": "postNumber"
                        },
                        {
                            element: "input",
                            "title": "Personal number",
                            "field": "id"
                        }]
                },
                {
                    "element": "group",
                    id: "contactInfoGroup",
                    title: "Contact Info",
                    "elements": [{
                        element: "input",
                        "title": "Phone",
                        "field": "phoneNumber"
                    },
                        {
                            element: "input",
                            "title": "Mobile",
                            "field": "mobile"
                        },
                        {
                            element: "input",
                            "title": "Email",
                            "field": "email"
                        },
                        {
                            element: "input",
                            "title": "Address 1",
                            "field": "address1"
                        },
                        {
                            element: "input",
                            "title": "Address 2",
                            "field": "address2"
                        },
                        {
                            element: "input",
                            "title": "Address 3",
                            "field": "address3"
                        }]
                },
                {
                    "element": "h1",
                    "content": "Maintenance Manager",
                    "styles": ["group-header"]
                },
                {
                    "element": "group",
                    "id": "maintenanceManagerGroup",
                    "title": "Maintenance Manager",
                    "elements": [{
                        element: "input",
                        "title": "Section",
                        "field": "sectionCode",
                        "attributes": {
                            "required": "true"
                        },
                        "description": "sectionDescription"
                    },
                        {
                            element: "input",
                            "title": "Trade",
                            "field": "tradeCode",
                            "attributes": {
                                "required": "true"
                            },
                            "description": "tradeDescription"
                        },
                        {
                            element: "input",
                            "title": "Cost Element",
                            "field": "costElementCode",
                            "attributes": {
                                "required": "true"
                            },
                            "description": "costElementDescription"
                        },
                        {
                            element: "input",
                            "title": "Calendar",
                            "field": "calendarCode",
                            "attributes": {
                                "required": "true"
                            },
                            "description": "calendarDescription"
                        }]
                },
                {
                    "element": "group",
                    id: "RatesPerHour",
                    title: "Rates per hour",
                    "elements": [{
                        element: "input",
                        "title": "Site currency",
                        "field": "currencyCode",
                        "attributes": {
                            "readonly": "true"
                        },
                        "description": "currencyDescription"
                    },
                        {
                            element: "input",
                            "title": "Normal time",
                            "field": "normalTime",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Overtime 1",
                            "field": "overtime1",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Overtime 2",
                            "field": "overtime2",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Overtime 3",
                            "field": "overtime3",
                            "attributes": {
                                "required": "true"
                            }
                        }]
                },
                {
                    "element": "group",
                    id: "Notifications",
                    title: "Notifications",
                    "elements": [{
                        element: "checkbox",
                        "title": "Email on Work Order Approval",
                        "field": "isEmailWorkOrderApproval"
                    }, {
                        element: "checkbox",
                        "title": "SMS on Work Order Approval",
                        "field": "isSmsWorkOrderApproval"
                    }, {
                        element: "checkbox",
                        "title": "SMS for Critical Assets only",
                        "field": "isSmsForCriticalAssetsOnly"
                    }]
                },
                {
                    "element": "h1",
                    "content": "Geographic Data",
                    "styles": ["group-header"]
                },
                {
                    "element": "group",
                    id: "GeographicLocation",
                    title: "Geographic location"
                },
                {
                    "element": "group",
                    id: "GeographicNotes",
                    title: "Geographic notes"
                }]
        }
    };
